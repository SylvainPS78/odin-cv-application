import React from "react";
import Icon from "./Icon";
import { COLORS } from "../../constants/colors";

const EducationSection = ({ education }) => {
  if (!education?.list?.length) return null;

  return (
    <div className="user-education-container">
      <div className="user-education-title">
        <Icon name="education" size={28} color={COLORS.BLACK} />
        <span>Education</span>
      </div>
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
    </div>
  );
};

export default EducationSection;
