import React from "react";
import defaultUserPicture from "../img/default_user_picture.jpg";

const UserHeader = ({ formData }) => {
  return (
    <div className="user-name-and-title">
      <h2 className="user-first-name">
        {formData?.firstName || ""} {formData?.lastName || ""}
      </h2>
      <p className="user-job-title">{formData?.jobTitle || ""}</p>
    </div>
  );
};

const UserPicture = ({
  userPicture = defaultUserPicture,
  alt = "User profile picture",
}) => {
  return (
    <img
      className="user-picture-preview"
      src={userPicture}
      alt={alt}
      width="100px"
      height="100px"
    />
  );
};

export { UserHeader, UserPicture };
