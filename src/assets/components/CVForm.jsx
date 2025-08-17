import React, { useState } from "react";
import InputField from "./InputField";
import { formList } from "../data/data.jsx";

const CVForm = () => {
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({});

  let hasPrev = index > 0;
  let hasNext = index < formList.length - 1;

  const handleNextClick = (e) => {
    e.preventDefault();
    if (hasNext) {
      setIndex(index + 1);
    }
  };

  const handlePreviousClick = (e) => {
    e.preventDefault();
    if (hasPrev) {
      setIndex(index - 1);
    }
  };

  const handleInputChange = (inputId, value) => {
    setFormData((prev) => {
      const currentInput = currentForm.inputs.find(
        (input) => input.id === inputId
      );

      if (currentInput && currentInput.addButton) {
        return {
          ...prev,
          [inputId]: {
            value: value,
            list: prev[inputId]?.list || currentInput.inputList || [],
          },
        };
      } else {
        return {
          ...prev,
          [inputId]: value,
        };
      }
    });
  };

  const handleAddToList = (inputId, value) => {
    setFormData((prev) => ({
      ...prev,
      [inputId]: {
        value: "",
        list: [...(prev[inputId]?.list || []), value],
      },
    }));
  };

  const handleRemoveFromList = (inputId, index) => {
    setFormData((prev) => {
      if (!prev[inputId] || !prev[inputId].list) return prev;

      const newList = prev[inputId].list.filter((_, i) => i !== index);

      return {
        ...prev,
        [inputId]: {
          ...prev[inputId],
          list: newList,
        },
      };
    });
  };

  let currentForm = formList[index];

  return (
    <aside className="input-form-container">
      <form>
        <div className="input-section">
          <h2 className="form-title">{currentForm.formTitle}</h2>
          <h3 className="form-sub-title">{currentForm.formSubTitle}</h3>
          {currentForm.inputs.map((input) => (
            <InputField
              key={input.id}
              {...input}
              value={
                input.addButton
                  ? formData[input.id]?.value || ""
                  : formData[input.id] || ""
              }
              inputList={
                input.addButton
                  ? formData[input.id]?.list || input.inputList || []
                  : []
              }
              onChange={(e) => handleInputChange(input.id, e.target.value)}
              onAdd={(value) => handleAddToList(input.id, value)}
              onDelete={(index) => handleRemoveFromList(input.id, index)}
            />
          ))}
        </div>
        <div className="form-navigation">
          <button
            type="button"
            className="previous-button"
            onClick={handlePreviousClick}
            disabled={!hasPrev}
          >
            Previous
          </button>
          <button
            type="button"
            className="next-button"
            onClick={handleNextClick}
            disabled={!hasNext}
          >
            Next
          </button>
        </div>
      </form>
    </aside>
  );
};

export default CVForm;
