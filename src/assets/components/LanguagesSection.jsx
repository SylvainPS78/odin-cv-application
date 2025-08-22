import React from "react";
import Icon from "./Icon";

const LanguagesSection = ({ languages }) => {
  if (!languages?.list?.length) return null;

  return (
    <section aria-labelledby="languages-heading" className="language-section">
      <h4 id="languages-heading" className="aside-preview-section-title">
        <Icon
          name="languages"
          size={24}
          className="language-icon"
          aria-label="Languages spoken"
        />
        <span>Languages</span>
      </h4>
      <div className="aside-preview-section-language-content" role="list">
        {languages.list.map((language, index) => (
          <p key={index} className="user-languages" role="listitem">
            {language}
          </p>
        ))}
      </div>
    </section>
  );
};

export default LanguagesSection;
