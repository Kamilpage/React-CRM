import { useState, useRef, useEffect } from "react";

export const usePopover = () => {
    const [open, setOpen] = useState(false);
    const [coords, setCoords] = useState(null);
    const triggerRef = useRef(null);

    const openPopover = () => {
        if (!triggerRef.current) return;

        const rect = triggerRef.current.getBoundingClientRect();

        setCoords({
            top: rect.bottom + 6, // 6px вниз от кнопки
            left: rect.left - 140, // сдвигаем меню влево (чтобы было рядом)
        });

        setOpen(true);
    };

    const closePopover = () => setOpen(false);

    // закрытие по клику вне
    useEffect(() => {
        if (!open) return;

        const handler = (e) => {
            const popover = document.querySelector("#popover-content");
            if (
                popover &&
                !popover.contains(e.target) &&
                !triggerRef.current.contains(e.target)
            ) {
                closePopover();
            }
        };

        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [open]);

    return { open, coords, triggerRef, openPopover, closePopover };
};