import { useState } from "react";

export const useFormNavigation = (formList) => {
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({});

  const currentForm = formList[index];
  const hasPrev = index > 0;
  const hasNext = index < formList.length - 1;

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

  const handleRemoveFromList = (inputId, itemIndex) => {
    setFormData((prev) => {
      if (!prev[inputId] || !prev[inputId].list) return prev;

      const newList = prev[inputId].list.filter((_, i) => i !== itemIndex);

      return {
        ...prev,
        [inputId]: {
          ...prev[inputId],
          list: newList,
        },
      };
    });
  };

  return {
    index,
    currentForm,
    hasPrev,
    hasNext,
    formData,
    handleNextClick,
    handlePreviousClick,
    handleInputChange,
    handleAddToList,
    handleRemoveFromList,
  };
};
