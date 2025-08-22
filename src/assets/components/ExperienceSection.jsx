import React from "react";
import Icon from "./Icon";
import { calculateDuration } from "../../utils/dateUtils";
import { COLORS } from "../../constants/colors";

const ExperienceSection = ({ experience }) => {
  if (!experience?.list?.length) return null;

  return (
    <section
      className="user-experience-container"
      aria-labelledby="experience-heading"
    >
      <h3 id="experience-heading" className="user-experience-title">
        <Icon
          name="experience"
          size={28}
          color={COLORS.BLACK}
          aria-label="Professional experience"
        />
        <span>Experience</span>
      </h3>
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
    </section>
  );
};

export default ExperienceSection;
