import React from "react";
import InputField from "./InputField";
import Button from "./Button";
import { formList } from "../../constants/formConfig.js";
import { useFormNavigation } from "../../hooks/useFormNavigation.js";

const CVForm = () => {
  const {
    currentForm,
    hasPrev,
    hasNext,
    formData,
    handleNextClick,
    handlePreviousClick,
    handleInputChange,
    handleAddToList,
    handleRemoveFromList,
  } = useFormNavigation(formList);

  return (
    <aside className="input-form-container" role="form" aria-label="CV Form">
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
              onDelete={(itemIndex) =>
                handleRemoveFromList(input.id, itemIndex)
              }
            />
          ))}
        </div>
        {currentForm.addButton && (
          <>
            <Button
              variant="add"
              //onClick={handleAddClick}
              //disabled={!value || !value.trim()}
            >
              Add
            </Button>
          </>
        )}

        <div
          className="form-navigation"
          role="navigation"
          aria-label="Navigation du formulaire"
        >
          <Button
            variant="previous"
            onClick={handlePreviousClick}
            disabled={!hasPrev}
            ariaLabel="Go to previous form"
          >
            Previous
          </Button>
          <Button
            variant="next"
            onClick={handleNextClick}
            disabled={!hasNext}
            ariaLabel="Go to next form"
          >
            Next
          </Button>
        </div>
      </form>
    </aside>
  );
};

export default CVForm;
