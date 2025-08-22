import React from "react";
import Icon from "./Icon";
import { COLORS } from "../../constants/colors";

const EducationSection = ({ education }) => {
  if (!education?.list?.length) return null;

  return (
    <section className="user-education-container" aria-labelledby="education-heading">
      <h3 id="education-heading" className="user-education-title">
        <Icon name="education" size={28} color={COLORS.BLACK} aria-label="Educational background" />
        <span>Education</span>
      </h3>
      {education.list.map((educationItem, index) => (
        <div key={index} className="user-education-item">
          <h4 className="education-institution">
            {educationItem.localization}
          </h4>
          <p className="education-field">{educationItem.topic}</p>
          <p className="education-dates">
            {educationItem.startDate
              ? new Date(educationItem.startDate).getFullYear()
              : ""}{" "}
            -{" "}
            {educationItem.endDate
              ? new Date(educationItem.endDate).getFullYear()
              : ""}
          </p>
        </div>
      ))}
    </section>
  );
};

export default EducationSection;
