"use client";

import React from "react";
import classNames from "classnames";

const Button = React.forwardRef(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variantStyles = {
      default: classNames(
        "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500"
      ),
      // Add more variants as needed
    };

    const sizeStyles = {
      sm: "h-8 px-3",
      md: "h-10 px-4",
      lg: "h-12 px-6",
    };

    return (
      <button
        ref={ref}
        className={classNames(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button }; 