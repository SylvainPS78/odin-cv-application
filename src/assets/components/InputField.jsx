import React, { useState } from "react";
import Button from "./Button";

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
  onDelete,
  placeholder = "",
  className = "",
  disabled = false,

  ...otherProps
}) => {
  const [inputId] = useState(id || `input-${crypto.randomUUID()}`);

  const handleAddClick = () => {
    if (onAdd && value && value.trim()) {
      onAdd(value.trim());
    }
  };

  const handleDeleteClick = (index) => {
    onDelete(index);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && addButton) {
      e.preventDefault();
      handleAddClick();
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
        onKeyDown: addButton ? handleKeyDown : undefined,
        className: `input-field`,
        placeholder,
        disabled,
        "aria-required": required,
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
          <div className="saved-inputs-list">
            {inputList.map((savedInput, index) => (
              <span className="saved-input" key={index}>
                {savedInput}
                <Button
                  variant="delete"
                  onClick={() => handleDeleteClick(index)}
                  ariaLabel={`Delete ${savedInput}`}
                  title={`Delete ${savedInput}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18px"
                    viewBox="0 -960 960 960"
                    width="18px"
                    fill="#ff8787"
                  >
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg>
                </Button>
              </span>
            ))}
          </div>
          <Button
            variant="add"
            onClick={handleAddClick}
            disabled={!value || !value.trim()}
          >
            Add
          </Button>
        </>
      )}
    </div>
  );
};

export default InputField;
