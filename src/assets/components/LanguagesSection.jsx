import React from "react";
import Icon from "./Icon";

const LanguagesSection = ({ languages }) => {
  if (!languages?.list?.length) return null;

  return (
    <>
      <h4 className="aside-preview-section-title">
        <Icon name="languages" size={24} className="language-icon" />
        <span>Languages</span>
      </h4>
      <div className="aside-preview-section-language-content">
        {languages.list.map((language, index) => (
          <p key={index} className="user-languages">
            {language}
          </p>
        ))}
      </div>
    </>
  );
};

export default LanguagesSection;
