import React from "react";
import Icon from "./Icon";

const AboutSection = ({ description }) => {
  if (!description) return null;

  return (
    <>
      <h4 className="aside-preview-section-title">
        <Icon name="user" size={20} className="user-icon" />
        <span>About Me</span>
      </h4>
      <div className="aside-preview-section-about-content">
        <p className="about-me">{description}</p>
      </div>
    </>
  );
};

export default AboutSection;
