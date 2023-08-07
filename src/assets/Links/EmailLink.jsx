import React from "react";

const EmailLink = () => {
  const handleEmailClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const email = "info@littlemillenium.com";

    if (isMobile) {
      window.location.href = `intent://send/${email}#Intent;package=com.google.android.gm;end`;
    } else {
      window.location.href = `mailto:${email}`;
    }
  };

  return <span onClick={handleEmailClick}>info@littlemillenium.com</span>;
};

export default EmailLink;
