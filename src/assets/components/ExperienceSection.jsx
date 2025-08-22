import React from "react";
import Icon from "./Icon";
import { calculateDuration } from "../../utils/dateUtils";
import { COLORS } from "../../constants/colors";

const ExperienceSection = ({ experience }) => {
  if (!experience?.list?.length) return null;

  return (
    <div className="user-experience-container">
      <div className="user-experience-title">
        <Icon name="experience" size={28} color={COLORS.BLACK} />
        <span>Experience</span>
      </div>
      {experience.list.map((experienceItem, index) => (
        <div key={index} className="user-experience-item">
          <h4 className="experience-institution">
            {experienceItem.localization}
          </h4>
          <p className="experience-field">{experienceItem.topic}</p>
          <p className="experience-dates">
            {experienceItem.startDate
              ? new Date(experienceItem.startDate).getFullYear()
              : ""}{" "}
            -{" "}
            {experienceItem.endDate
              ? new Date(experienceItem.endDate).getFullYear()
              : ""}{" "}
            {experienceItem.startDate && experienceItem.endDate && (
              <span className="experience-duration">
                (
                {calculateDuration(
                  experienceItem.startDate,
                  experienceItem.endDate
                )}
                )
              </span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
