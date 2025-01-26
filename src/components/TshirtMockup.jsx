// src/components/TshirtMockup.jsx
import React from "react";

const TshirtMockup = ({ symbolUrl }) => {
  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <img
        src="https://www.freepnglogos.com/uploads/t-shirt-png/t-shirt-png-tshirt-png-clip-art-best-web-clipart-18.png" // Replace with your t-shirt image URL
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
