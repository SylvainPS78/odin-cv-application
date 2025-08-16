import React, { useState } from "react";

/**
 * Reusable InputField component with accessibility features
 */
const InputField = ({
  label,
  type = "text",
  id,
  name,
  value,
  onChange,
  required = false,
  placeholder = "",
  className = "",
  disabled = false,
  error = "",
  ...otherProps
}) => {
  const [inputId] = useState(id || `input-${crypto.randomUUID()}`);
  const hasError = !!error;

  return (
    <div className={`input-field-container ${className}`}>
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && (
            <span className="required-indicator" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}
      {React.createElement(type === "textarea" ? "textarea" : "input", {
        id: inputId,
        ...(type !== "textarea" && { type }),
        name: name || inputId,
        value,
        onChange,
        className: `input-field ${hasError ? "input-error" : ""}`,
        placeholder,
        disabled,
        "aria-invalid": hasError,
        "aria-required": required,
        "aria-describedby": hasError ? `${inputId}-error` : undefined,
        ...(type === "textarea" && {
          rows: 4,
          style: {
            resize: "none",
            width: "100%",
            overflowY: "auto",
            height: "auto",
            minHeight: "4em",
          },
        }),
        ...otherProps,
      })}
      {hasError && (
        <div
          id={`${inputId}-error`}
          className="error-message"
          aria-live="polite"
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default InputField;
