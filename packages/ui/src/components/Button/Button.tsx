import React from 'react';
import classNames from 'classnames';

export interface ButtonProps {
  type?: ButtonType;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'default' as ButtonType,
  className,
  ...rest
}) => {
  return (
    <button className={classNames(buttonType(type), className)} {...rest}>
      {children}
    </button>
  );
};

type ButtonType = 'default' | 'primary' | 'text';

function buttonType(type: ButtonType) {
  switch (type) {
    case 'default':
      return 'py-1 px-2 border border-neutral-300';
    case 'primary':
      return 'py-1 px-2 bg-blue-400';
    case 'text':
      return 'py-1 px-2 bg-transparent hover:bg-neutral-100';
  }
}
