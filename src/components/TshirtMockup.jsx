// src/components/TshirtMockup.jsx
import React from "react";

const TshirtMockup = ({ symbolUrl }) => {
  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <img
        src="src/components/images/tshirt.png" // Replace with your t-shirt image URL
        alt="T-shirt Mockup"
        style={{ width: 300 }}
      />
      {symbolUrl && (
        <img
          src={symbolUrl}
          alt="Military Symbol"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100px",
          }}
        />
      )}
    </div>
  );
};

export default TshirtMockup;
