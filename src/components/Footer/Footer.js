import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 50 }} />
    
      <TextField
            label="Forget Username/Password?"
            onChange={(e) => handleText(e.target.value)}/
            >
        Made by{" "}
        <a>
          The Four Stacks - CodeDifferntly
        </a>
     
    </div>
  );
};

export default Footer;