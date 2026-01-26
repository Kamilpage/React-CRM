import React from "react";

const AddButton = ({label, onClick}) => {
    return (
        <button
            onClick={onClick}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                background: 'black',
                border: '1px solid #000',
                borderRadius: '8px',
                fontSize: '14px',
                cursor: 'pointer',
                color: 'white',
                marginRight: '36px',
                transition: 'background 0.15s ease, border-color 0.15s ease'
            }}
        >
            {label}
        </button>
    );
};

export default AddButton;
