import React, { useState } from "react";
import InputField from "./InputField";

const PersonnalInformationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when typing :
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.jobTitle) {
      newErrors.jobTitle = "Job title is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    }

    if (!formData.address) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form Submitted:", formData); // TO BE MODIFIED
    }
  };

  return (
    <aside className="input-form">
      <form onSubmit={handleNext} className="personal-information-form">
        <h2>Personal Informations</h2>
        <h3>Enter your personnal details</h3>
        <InputField
          label="First Name"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          error={errors.firstName}
          placeholder="John"
        />

        <InputField
          label="Last Name"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          error={errors.lastName}
          placeholder="Doe"
        />

        <InputField
          label="Job Title"
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          required
          error={errors.jobTitle}
          placeholder="The Odin Project Student"
        />

        <InputField
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          error={errors.email}
          placeholder="john@example.com"
          autoComplete="email"
        />

        <InputField
          label="Phone Number"
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          error={errors.phoneNumber}
          placeholder="01 23 45 67 89"
        />

        <InputField
          label="Address"
          type="text"
          name="Address"
          value={formData.address}
          onChange={handleChange}
          required
          error={errors.address}
          placeholder="My address"
        />
        <button type="submit" className="submit-button">
          Next
        </button>
      </form>
    </aside>
  );
};

export default PersonnalInformationForm;
