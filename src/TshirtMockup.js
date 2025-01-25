
import React from "react";

const TshirtMockup = ({ symbolUrl }) => {
  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <img
        src="https://example.com/tshirt-mockup.png"
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
