import React from "react";

const Button = ({
  variant = "primary",
  disabled = false,
  onClick,
  className = "",
  ariaLabel,
  children,
  ...otherProps
}) => {
  const getButtonClass = () => {
    const baseClass = "button";
    const variantClasses = {
      next: "next-button",
      previous: "previous-button",
      add: "add-button",
      delete: "delete-button",
    };

    return `${baseClass} ${variantClasses[variant] || ""} ${className}`.trim();
  };

  return (
    <button
      type="button"
      className={getButtonClass()}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
