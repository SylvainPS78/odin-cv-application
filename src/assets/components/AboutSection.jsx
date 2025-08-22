import React from "react";
import Icon from "./Icon";

const AboutSection = ({ description }) => {
  if (!description) return null;

  return (
    <section aria-labelledby="about-heading">
      <h4 id="about-heading" className="aside-preview-section-title">
        <Icon name="user" size={20} className="user-icon" aria-label="Personal information" />
        <span>About Me</span>
      </h4>
      <div className="aside-preview-section-about-content">
        <p className="about-me">{description}</p>
      </div>
    </section>
  );
};

export default AboutSection;
