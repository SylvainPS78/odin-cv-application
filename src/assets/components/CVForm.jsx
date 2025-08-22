import React from "react";
import InputField from "./InputField";
import CVPreview from "./CVPreview.jsx";
import Button from "./Button";
import Icon from "./Icon";
import { formList } from "../../constants/formConfig.js";
import { useFormNavigation } from "../../hooks/useFormNavigation.js";
import { ICON_COLORS } from "../../constants/colors";

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
    <>
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
                      onClick={() =>
                        handleRemoveFromList(currentForm.id, index)
                      }
                      ariaLabel={`Delete ${object.localization} - ${object.topic}`}
                      title={`Delete ${object.localization} - ${object.topic}`}
                    >
                      <Icon name="delete" size={18} color={ICON_COLORS.DELETE} />
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
      <main>
        <CVPreview formData={formData} />
      </main>
    </>
  );
};

export default CVForm;
