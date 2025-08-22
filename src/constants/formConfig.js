import defaultUserPicture from "../assets/img/default_user_picture.jpg";

/**
 * Form types constants
 */
export const FORM_TYPES = {
  PERSONAL: "personal",
  ABOUT: "about",
  SKILLS: "skills",
  LANGUAGES: "languages",
  EDUCATION: "education",
  EXPERIENCE: "experience",
};

/**
 * Input types constants
 */
export const INPUT_TYPES = {
  TEXT: "text",
  EMAIL: "email",
  TEL: "tel",
  DATE: "date",
  TEXTAREA: "textarea",
};

/**
 * Validation patterns
 */
export const VALIDATION_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[\d\s\-+()]+$/,
  NAME: /^[a-zA-ZÀ-ÿ\s\-']+$/,
};

/**
 * Field constraints
 */
export const FIELD_CONSTRAINTS = {
  NAME_MAX_LENGTH: 50,
  JOB_TITLE_MAX_LENGTH: 100,
  EMAIL_MAX_LENGTH: 100,
  PHONE_MAX_LENGTH: 20,
  ADDRESS_MAX_LENGTH: 150,
  DESCRIPTION_MAX_LENGTH: 500,
  SKILL_MAX_LENGTH: 50,
  LANGUAGE_MAX_LENGTH: 30,
  COMPANY_MAX_LENGTH: 100,
  STUDY_FIELD_MAX_LENGTH: 100,
  UNIVERSITY_MAX_LENGTH: 100,
};

/**
 * Form configuration with validation and enhanced UX
 */
export const formList = [
  {
    id: FORM_TYPES.PERSONAL,
    formTitle: "Personal Information",
    formSubTitle: "Enter your personal details",
    userPicture: defaultUserPicture,
    inputs: [
      {
        id: "firstName",
        label: "First Name",
        type: INPUT_TYPES.TEXT,
        placeholder: "e.g., John",
        required: false,
        maxLength: FIELD_CONSTRAINTS.NAME_MAX_LENGTH,
        pattern: VALIDATION_PATTERNS.NAME,
      },
      {
        id: "lastName",
        label: "Last Name",
        type: INPUT_TYPES.TEXT,
        placeholder: "e.g., Doe",
        required: false,
        maxLength: FIELD_CONSTRAINTS.NAME_MAX_LENGTH,
        pattern: VALIDATION_PATTERNS.NAME,
      },
      {
        id: "jobTitle",
        label: "Job Title",
        type: INPUT_TYPES.TEXT,
        placeholder: "e.g., Frontend Developer",
        required: false,
        maxLength: FIELD_CONSTRAINTS.JOB_TITLE_MAX_LENGTH,
      },
      {
        id: "email",
        label: "Email Address",
        type: INPUT_TYPES.EMAIL,
        placeholder: "e.g., john.doe@example.com",
        required: false,
        maxLength: FIELD_CONSTRAINTS.EMAIL_MAX_LENGTH,
        pattern: VALIDATION_PATTERNS.EMAIL,
      },
      {
        id: "phoneNumber",
        label: "Phone Number",
        type: INPUT_TYPES.TEL,
        placeholder: "e.g., +33 1 23 45 67 89",
        required: false,
        maxLength: FIELD_CONSTRAINTS.PHONE_MAX_LENGTH,
        pattern: VALIDATION_PATTERNS.PHONE,
      },
      {
        id: "address",
        label: "Address",
        type: INPUT_TYPES.TEXT,
        placeholder: "e.g., 123 Main Street, City, Country",
        required: false,
        maxLength: FIELD_CONSTRAINTS.ADDRESS_MAX_LENGTH,
      },
    ],
  },
  {
    id: FORM_TYPES.ABOUT,
    formTitle: "About You",
    formSubTitle: "Tell us more about your abilities and aspirations",
    inputs: [
      {
        id: "description",
        label: "Professional Summary",
        type: INPUT_TYPES.TEXTAREA,
        placeholder:
          "Describe your professional background, key skills, and career objectives. This section helps employers understand your value proposition.",
        required: false,
        maxLength: FIELD_CONSTRAINTS.DESCRIPTION_MAX_LENGTH,
        rows: 5,
      },
    ],
  },
  {
    id: FORM_TYPES.SKILLS,
    formTitle: "Technical Skills",
    formSubTitle: "Add your technical and professional skills",
    inputs: [
      {
        id: "skillDescription",
        label: "Skill",
        type: INPUT_TYPES.TEXT,
        placeholder: "e.g., JavaScript, Python",
        required: false,
        maxLength: FIELD_CONSTRAINTS.SKILL_MAX_LENGTH,
        addButton: true,
        inputList: [],
      },
    ],
  },
  {
    id: FORM_TYPES.LANGUAGES,
    formTitle: "Languages",
    formSubTitle: "Specify the languages you speak",
    inputs: [
      {
        id: "language",
        label: "Language",
        type: INPUT_TYPES.TEXT,
        placeholder: "e.g., English, French, Spanish",
        required: false,
        maxLength: FIELD_CONSTRAINTS.LANGUAGE_MAX_LENGTH,
        addButton: true,
        inputList: [],
      },
    ],
  },
  {
    id: FORM_TYPES.EDUCATION,
    formTitle: "Education",
    formSubTitle: "Add your educational background and qualifications",
    addButton: true,
    inputs: [
      {
        id: "universityName",
        label: "Institution Name",
        type: INPUT_TYPES.TEXT,
        placeholder: "e.g., University of Technology",
        required: false,
        maxLength: FIELD_CONSTRAINTS.UNIVERSITY_MAX_LENGTH,
      },
      {
        id: "studyField",
        label: "Field of Study",
        type: INPUT_TYPES.TEXT,
        placeholder: "e.g., Computer Science",
        required: false,
        maxLength: FIELD_CONSTRAINTS.STUDY_FIELD_MAX_LENGTH,
      },
      {
        id: "startDate",
        label: "Start Date",
        type: INPUT_TYPES.DATE,
        required: false,
      },
      {
        id: "endDate",
        label: "End Date",
        type: INPUT_TYPES.DATE,
        required: false,
      },
    ],
    formSavedObjects: [],
  },
  {
    id: FORM_TYPES.EXPERIENCE,
    formTitle: "Work Experience",
    formSubTitle: "Add your professional work experience and achievements",
    addButton: true,
    inputs: [
      {
        id: "companyName",
        label: "Company Name",
        type: INPUT_TYPES.TEXT,
        placeholder: "e.g., Google, Microsoft",
        required: false,
        maxLength: FIELD_CONSTRAINTS.COMPANY_MAX_LENGTH,
      },
      {
        id: "jobPosition",
        label: "Job Position",
        type: INPUT_TYPES.TEXT,
        placeholder: "e.g., Frontend Developer",
        required: false,
        maxLength: FIELD_CONSTRAINTS.JOB_TITLE_MAX_LENGTH,
      },
      {
        id: "startDate",
        label: "Start Date",
        type: INPUT_TYPES.DATE,
        required: false,
      },
      {
        id: "endDate",
        label: "End Date",
        type: INPUT_TYPES.DATE,
        required: false,
      },
    ],
    formSavedObjects: [],
  },
];
