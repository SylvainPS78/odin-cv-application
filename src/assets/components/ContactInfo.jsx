import React from "react";
import Icon from "./Icon";

const ContactInfo = ({ formData }) => {
  if (!formData?.email && !formData?.phoneNumber && !formData?.address) {
    return null;
  }

  return (
    <>
      <h4 className="aside-preview-section-title">
        <Icon name="contact" size={24} className="contact-icon" />
        <span>Contact</span>
      </h4>
      <div className="aside-preview-section-contact-content">
        {formData.email && (
          <div className="preview-email">
            <Icon name="email" size={16} className="contact-icon" />
            <span className="user-contact">{formData.email}</span>
          </div>
        )}
        {formData.phoneNumber && (
          <div className="preview-phone">
            <Icon name="phone" size={16} className="contact-icon" />
            <span className="user-contact">{formData.phoneNumber}</span>
          </div>
        )}
        {formData.address && (
          <div className="preview-address">
            <Icon name="location" size={16} className="contact-icon" />
            <span className="user-contact">{formData.address}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactInfo;
