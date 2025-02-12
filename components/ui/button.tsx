import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({ children, size = "md", ...props }) => {
  const sizeClass = size === "lg" ? "py-3 px-6" : size === "sm" ? "py-1 px-3" : "py-2 px-4";
  return (
    <button {...props} className={`shadcn-button ${sizeClass} ${props.className}`}>
      {children}
    </button>
  );
};

export { Button }; 