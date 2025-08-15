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
      <input
        id={inputId}
        type={type}
        name={name || inputId}
        value={value}
        onChange={onChange}
        className={`input-field ${hasError ? "input-error" : ""}`}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={hasError}
        aria-required={required}
        aria-describedby={hasError ? `${inputId}-error` : undefined}
        {...otherProps}
      />
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
