import React, { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & { label: string };

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
    return (
        <>
            <label>{label}</label>
            <input {...rest} />
        </>
    );
};

export default Input;