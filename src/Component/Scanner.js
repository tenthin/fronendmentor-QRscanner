import React from "react";
import "./Scanner.css";

function Scanner() {
  return (
    <div className="scanner">
      <div className="scanner-card">
        <img src="/images/image-qr-code.png" alt="" />
        <div className="scanner-text">
          <h3>
            <p>Improve your front-end skills by building projects</p>
          </h3>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default Scanner;
