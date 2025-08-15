export const formList = [
  {
    formTitle: "Personal Informations",
    formSubTitle: "Enter your personal details",
    inputs: [
      {
        id: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "John",
        required: false,
      },
      {
        id: "lastName",
        label: "Last Name",
        type: "text",
        placeholder: "Doe",
        required: false,
      },
      {
        id: "jobTitle",
        label: "Job Title",
        type: "text",
        placeholder: "The Odin Project Student",
        required: false,
      },
      {
        id: "email",
        label: "Email Address",
        type: "email",
        placeholder: "john@exemple.com",
        required: false,
      },
      {
        id: "phoneNumber",
        label: "Phone Number",
        type: "tel",
        placeholder: "01 23 45 67 89",
        required: false,
      },
      {
        id: "address",
        label: "Address",
        type: "text",
        placeholder: "Your address",
        required: false,
      },
    ],
  },
  {
    formTitle: "About you",
    formSubTitle: "Tell more about your abilities",
    inputs: [
      {
        id: "description",
        type: "textarea",
        placeholder: "Explain briefly about yourself & what you can do",
        required: false,
      },
    ],
  },
  {
    formTitle: "Skills",
    formSubTitle: "Write & Add your skills",
    inputs: [
      {
        id: "skillDescription",
        type: "text",
        placeholder: "Add a skill",
        required: false,
      },
    ],
  },
  {
    formTitle: "Languages",
    formSubTitle: "How many languages you know ?",
    inputs: [
      {
        id: "language",
        type: "text",
        placeholder: "Add a language",
        required: false,
      },
    ],
  },
  {
    formTitle: "Education",
    formSubTitle: "Add your Education's History",
    inputs: [
      {
        id: "universityName",
        label: "University Name",
        type: "text",
        placeholder: "Where did you studied",
        required: false,
      },
      {
        id: "studyField",
        label: "Field of Study",
        type: "text",
        placeholder: "What did you studied",
        required: false,
      },
      {
        id: "startDate",
        label: "Start Date",
        type: "date",
        required: false,
      },
      {
        id: "endDate",
        label: "End Date",
        type: "date",
        required: false,
      },
    ],
  },
  {
    formTitle: "Experiences",
    formSubTitle: "Add your work Experiences",
    inputs: [
      {
        id: "companyName",
        label: "Company Name",
        type: "text",
        required: false,
      },
      {
        id: "jobPosition",
        label: "Job Position",
        type: "text",
        required: false,
      },
      {
        id: "startDate",
        label: "Start Date",
        type: "date",
        required: false,
      },
      {
        id: "endDate",
        label: "End Date",
        type: "date",
        required: false,
      },
    ],
  },
];
