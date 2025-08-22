import React from "react";
import { UserPicture, UserHeader } from "./UserComponents";
import AboutSection from "./AboutSection";
import ContactInfo from "./ContactInfo";
import SkillsSection from "./SkillsSection";
import LanguagesSection from "./LanguagesSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";

const CVPreview = ({ formData }) => {
  return (
    <div className="cv-preview-container">
      <aside className="aside-preview-container" aria-label="Personal Information Sidebar">
        <UserPicture />
        <AboutSection description={formData?.description} />
        <ContactInfo formData={formData} />
        <SkillsSection skills={formData?.skillDescription} />
        <LanguagesSection languages={formData?.language} />
      </aside>
      
      <main className="main-preview-container" aria-label="Professional Experience">
        <UserHeader formData={formData} />
        <EducationSection education={formData?.education} />
        <ExperienceSection experience={formData?.experience} />
      </main>
    </div>
  );
};

export default CVPreview;
