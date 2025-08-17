import React, { useState } from "react";

const InputField = ({
  label,
  type = "text",
  id,
  name,
  value = "",
  onChange,
  required = false,
  addButton = false,
  inputList = [],
  onAdd,
  placeholder = "",
  className = "",
  disabled = false,
  error = "",
  ...otherProps
}) => {
  const [inputId] = useState(id || `input-${crypto.randomUUID()}`);
  const hasError = !!error;

  const handleAddClick = () => {
    if (onAdd && value && value.trim()) {
      onAdd(value.trim());
    }
  };

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
        onAdd,
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
      {addButton && (
        <>
          <div class="saved-inputs">
            {inputList.map((savedInput, index) => (
              <span key={index}>{savedInput}</span>
            ))}
          </div>
          <button
            type="button"
            className="add-button"
            onClick={handleAddClick}
            disabled={!value && !value.trim()}
          >
            Add
          </button>
        </>
      )}

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
