import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer role="contentinfo" aria-label="Site footer">
      <p>
        &copy; <time dateTime={currentYear.toString()}>{currentYear}</time> Created by{" "}
        <a
          href="https://github.com/SylvainPS78"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Sylvain Web's GitHub profile"
        >
          Sylvain Web
        </a>
      </p>
      <p>
        Photo by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://unsplash.com/@miikola"
          aria-label="Visit Nicolas I.'s Unsplash profile"
        >
          Nicolas I.
        </a>{" "}
        on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://unsplash.com/photos/person-holding-dslr-camera-azPNN8Rcr48"
          aria-label="View original photo on Unsplash"
        >
          Unsplash
        </a>
      </p>
    </footer>
  );
};

export default Footer;
