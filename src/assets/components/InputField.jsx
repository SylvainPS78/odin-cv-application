import React, { useState } from "react";
import Button from "./Button";
import Icon from "./Icon";
import { ICON_COLORS } from "../../constants/colors";

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
                  <Icon name="delete" size={18} color={ICON_COLORS.DELETE} />
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
