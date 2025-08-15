import React, { useState } from "react";
import InputField from "./InputField";
import { formList } from "../data/data.jsx";

const CVForm = () => {
  const [index, setIndex] = useState(0);
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

  let currentForm = formList[index];

  return (
    <aside className="input-form-container">
      <form onSubmit={handleNextClick}>
        <div className="input-section">
          <h2 className="form-title">{currentForm.formTitle}</h2>
          <h3 className="form-sub-title">{currentForm.formSubTitle}</h3>
          {currentForm.inputs.map((input) => (
            <InputField key={input.id} {...input} />
          ))}
        </div>
        <div className="form-navigation">
          <button
            type="submit"
            className="previous-button"
            onClick={handlePreviousClick}
            disabled={!hasPrev}
          >
            Previous
          </button>
          <button
            type="submit"
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
