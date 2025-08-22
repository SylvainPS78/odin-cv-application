import React from "react";
import Icon from "./Icon";

const SkillsSection = ({ skills }) => {
  if (!skills?.list?.length) return null;

  return (
    <>
      <h4 className="aside-preview-section-title">
        <Icon name="skills" size={24} className="skills-icon" />
        <span>Skills</span>
      </h4>
      <div className="aside-preview-section-skill-content">
        {skills.list.map((skill, index) => (
          <p key={index} className="user-skill">
            {skill}
          </p>
        ))}
      </div>
    </>
  );
};

export default SkillsSection;
