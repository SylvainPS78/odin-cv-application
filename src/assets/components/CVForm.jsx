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
    handleAddFormObject,
    handleKeyDown,
  } = useFormNavigation(formList);

  return (
    <aside className="input-form-container" role="form" aria-label="CV Form">
      <form onKeyDown={handleKeyDown}>
        <div className="input-section">
          <h2 className="form-title">{currentForm.formTitle}</h2>
          <h3 className="form-sub-title">{currentForm.formSubTitle}</h3>
          {currentForm.userPicture && (
            <img
              className="user-picture"
              src={currentForm.userPicture}
              alt="User profile picture"
              width="100px"
              height="100px"
            />
          )}
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
              onAdd={(value) => handleAddToList(input.id, value, false)}
              onDelete={(itemIndex) =>
                handleRemoveFromList(input.id, itemIndex)
              }
            />
          ))}
        </div>
        {formData[currentForm.id]?.list && (
          <div className="saved-form-objects">
            {[...(formData[currentForm.id]?.list || [])].map(
              (object, index) => (
                <div key={index} className="saved-object-item">
                  <Button
                    variant="delete"
                    onClick={() => handleRemoveFromList(currentForm.id, index)}
                    ariaLabel={`Delete ${object.localization} - ${object.topic}`}
                    title={`Delete ${object.localization} - ${object.topic}`}
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
                  <span>{`${object.localization} > ${object.topic}`}</span>
                </div>
              )
            )}
          </div>
        )}

        {currentForm.addButton && (
          <>
            <Button
              variant="add"
              onClick={() => handleAddFormObject(currentForm.id)}
              disabled={
                !currentForm.inputs.some(
                  (input) =>
                    formData[input.id] &&
                    formData[input.id].toString().trim() !== ""
                )
              }
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
