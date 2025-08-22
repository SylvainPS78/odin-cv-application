import React from "react";
import Icon from "./Icon";

const ContactInfo = ({ formData }) => {
  if (!formData?.email && !formData?.phoneNumber && !formData?.address) {
    return null;
  }

  return (
    <section aria-labelledby="contact-heading">
      <h4 id="contact-heading" className="aside-preview-section-title">
        <Icon
          name="contact"
          size={24}
          className="contact-icon"
          aria-label="Contact information"
        />
        <span>Contact</span>
      </h4>
      <div className="aside-preview-section-contact-content">
        {formData.email && (
          <div className="preview-email">
            <Icon
              name="email"
              size={16}
              className="contact-icon"
              aria-label="Email address"
            />
            <span className="user-contact">{formData.email}</span>
          </div>
        )}
        {formData.phoneNumber && (
          <div className="preview-phone">
            <Icon
              name="phone"
              size={16}
              className="contact-icon"
              aria-label="Phone number"
            />
            <span className="user-contact">{formData.phoneNumber}</span>
          </div>
        )}
        {formData.address && (
          <div className="preview-address">
            <Icon
              name="location"
              size={16}
              className="contact-icon"
              aria-label="Location"
            />
            <span className="user-contact">{formData.address}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactInfo;
