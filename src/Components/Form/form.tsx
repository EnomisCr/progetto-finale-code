import React, { ReactNode, FormEvent, useState, useRef } from 'react';
import Input from '../Input/input';

interface FormProps {
  title?: string;
  children: ReactNode;
  onSubmit: (form: HTMLFormElement) => void;
}

const Form: React.FC<FormProps> = ({ title, children, onSubmit }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formRef.current) {
      onSubmit(formRef.current);
      logFormData(formRef.current); // Stampare i dati del form
    }
  };

  const logFormData = (form: HTMLFormElement) => {
    const formData = new FormData(form);
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      {title && <h3>{title}</h3>}
      <fieldset>
        {children}
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;