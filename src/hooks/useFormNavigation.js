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

  const handleAddToList = (key, item, isFormObject = false) => {
    setFormData((prev) => {
      if (isFormObject) {
        return {
          ...prev,
          [key]: {
            ...prev[key],
            list: [...(prev[key]?.list || []), item],
          },
        };
      } else {
        return {
          ...prev,
          [key]: {
            value: "",
            list: [...(prev[key]?.list || []), item],
          },
        };
      }
    });
  };

  const handleAddFormObject = (formId) => {
    const ObjectToSave = {};

    currentForm.inputs.forEach((input) => {
      const value = formData[input.id];
      if (value !== undefined && value !== "") {
        ObjectToSave[input.id] = value;
      }
    });

    if (formId === "education") {
      ObjectToSave.localization = ObjectToSave.universityName || "";
      ObjectToSave.topic = ObjectToSave.studyField || "";
    } else if (formId === "experience") {
      ObjectToSave.localization = ObjectToSave.companyName || "";
      ObjectToSave.topic = ObjectToSave.jobPosition || "";
    }

    ObjectToSave.createdAt = new Date().toISOString();

    handleAddToList(formId, ObjectToSave, true);

    currentForm.inputs.forEach((input) => handleInputChange(input.id, ""));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && currentForm.addButton) {
      e.preventDefault();

      const hasData = currentForm.inputs.some(
        (input) =>
          formData[input.id] && formData[input.id].toString().trim() !== ""
      );

      if (hasData) {
        handleAddFormObject(currentForm.id);
      }
    }
  };

  const handleRemoveFromList = (key, itemIndex) => {
    setFormData((prev) => {
      if (!prev[key] || !prev[key].list) {
        return prev;
      }

      const newList = prev[key].list.filter((_, i) => i !== itemIndex);

      return {
        ...prev,
        [key]: {
          ...prev[key],
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
    handleAddFormObject,
    handleKeyDown,
  };
};
