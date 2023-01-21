import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  return (
    <button {...rest} className="bg-neutral-300 text-xl dark:bg-neutral-300">
      {children}
    </button>
  );
};
