import { createContext, useContext, useState } from "react";
import ConfirmModal from "./ConfirmModal.jsx";

const ConfirmContext = createContext(null);

export const ConfirmProvider = ({ children }) => {
    const [state, setState] = useState(null);

    const confirm = ({ title, description, confirmText = "Confirm", cancelText = "Cancel", danger = false }) =>
        new Promise((resolve) => {
            setState({
                title,
                description,
                confirmText,
                cancelText,
                danger,
                onConfirm: () => {
                    resolve(true);
                    setState(null);
                },
                onCancel: () => {
                    resolve(false);
                    setState(null);
                },
            });
        });

    return (
        <ConfirmContext.Provider value={{ confirm }}>
            {children}
            {state && <ConfirmModal {...state} />}
        </ConfirmContext.Provider>
    );
};

export const useConfirm = () => {
    const ctx = useContext(ConfirmContext);
    if (!ctx) throw new Error("useConfirm must be used inside ConfirmProvider");
    return ctx.confirm;
};
