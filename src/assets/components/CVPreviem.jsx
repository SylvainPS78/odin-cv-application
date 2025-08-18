import React from "react";

const CVPreview = ({ formData }) => {
  return (
    <div className="cv-preview-container">
      <h2 className="user-first-name">{formData?.firstName || ""}</h2>
      <h2 className="user-last-name">{formData?.lastName || ""}</h2>
      {formData?.skillDescription?.list?.map((skill, index) => (
        <p key={index} className="user-skill">{skill}</p>
      ))}
    </div>
  );
};

export default CVPreview;
