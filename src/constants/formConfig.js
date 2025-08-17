export const FORM_TYPES = {
  PERSONAL: "personal",
  ABOUT: "about",
  SKILLS: "skills",
  LANGUAGES: "languages",
  EDUCATION: "education",
  EXPERIENCE: "experience",
};

export const INPUT_TYPES = {
  TEXT: "text",
  EMAIL: "email",
  TEL: "tel",
  DATE: "date",
  TEXTAREA: "textarea",
};

export const formList = [
  {
    id: FORM_TYPES.PERSONAL,
    formTitle: "Personal Informations",
    formSubTitle: "Enter your personal details",
    inputs: [
      {
        id: "firstName",
        label: "First Name",
        type: INPUT_TYPES.TEXT,
        placeholder: "John",
        required: false,
      },
      {
        id: "lastName",
        label: "Last Name",
        type: INPUT_TYPES.TEXT,
        placeholder: "Doe",
        required: false,
      },
      {
        id: "jobTitle",
        label: "Job Title",
        type: INPUT_TYPES.TEXT,
        placeholder: "The Odin Project Student",
        required: false,
      },
      {
        id: "email",
        label: "Email Address",
        type: INPUT_TYPES.EMAIL,
        placeholder: "john@example.com",
        required: false,
      },
      {
        id: "phoneNumber",
        label: "Phone Number",
        type: INPUT_TYPES.TEL,
        placeholder: "01 23 45 67 89",
        required: false,
      },
      {
        id: "address",
        label: "Address",
        type: INPUT_TYPES.TEXT,
        placeholder: "Your address",
        required: false,
      },
    ],
  },
  {
    id: FORM_TYPES.ABOUT,
    formTitle: "About you",
    formSubTitle: "Tell more about your abilities",
    inputs: [
      {
        id: "description",
        type: INPUT_TYPES.TEXTAREA,
        placeholder: "Explain briefly about yourself & what you can do",
        required: false,
      },
    ],
  },
  {
    id: FORM_TYPES.SKILLS,
    formTitle: "Skills",
    formSubTitle: "Write & Add your skills",
    inputs: [
      {
        id: "skillDescription",
        type: INPUT_TYPES.TEXT,
        placeholder: "Add a skill",
        required: false,
        addButton: true,
        inputList: [],
      },
    ],
  },
  {
    id: FORM_TYPES.LANGUAGES,
    formTitle: "Languages",
    formSubTitle: "How many languages you know ?",
    inputs: [
      {
        id: "language",
        type: INPUT_TYPES.TEXT,
        placeholder: "Add a language",
        required: false,
        addButton: true,
        inputList: [],
      },
    ],
  },
  {
    id: FORM_TYPES.EDUCATION,
    formTitle: "Education",
    formSubTitle: "Add your Education's History",
    inputs: [
      {
        id: "universityName",
        label: "University Name",
        type: INPUT_TYPES.TEXT,
        placeholder: "Where did you study",
        required: false,
      },
      {
        id: "studyField",
        label: "Field of Study",
        type: INPUT_TYPES.TEXT,
        placeholder: "What did you study",
        required: false,
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
  },
  {
    id: FORM_TYPES.EXPERIENCE,
    formTitle: "Experiences",
    formSubTitle: "Add your work Experiences",
    inputs: [
      {
        id: "companyName",
        label: "Company Name",
        type: INPUT_TYPES.TEXT,
        required: false,
      },
      {
        id: "jobPosition",
        label: "Job Position",
        type: INPUT_TYPES.TEXT,
        required: false,
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
  },
];
