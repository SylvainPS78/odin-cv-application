import React from "react";
import Icon from "./Icon";

const SkillsSection = ({ skills }) => {
  if (!skills?.list?.length) return null;

  return (
    <section aria-labelledby="skills-heading">
      <h4 id="skills-heading" className="aside-preview-section-title">
        <Icon name="skills" size={24} className="skills-icon" aria-label="Professional skills" />
        <span>Skills</span>
      </h4>
      <div className="aside-preview-section-skill-content" role="list">
        {skills.list.map((skill, index) => (
          <p key={index} className="user-skill" role="listitem">
            {skill}
          </p>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
