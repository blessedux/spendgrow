import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded focus:outline-none transition-colors ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button; 