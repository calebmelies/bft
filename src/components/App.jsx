// src/components/App.jsx
import React, { useState } from "react";
import MilitaryUnitSelector from "./MilitaryUnitSelector";
import MilitarySymbol from "./MilitarySymbol";
import TshirtMockup from "./TshirtMockup";

const App = () => {
  const [unitType, setUnitType] = useState("");
  const [symbolUrl, setSymbolUrl] = useState("");

  const handleUnitSelect = (unit) => {
    setUnitType(unit);
  };

  return (
    <div>
      <h1>Military T-Shirt Designer</h1>
      <MilitaryUnitSelector onUnitSelect={handleUnitSelect} />
      <MilitarySymbol
        unitType={unitType}
        onSymbolGenerate={(url) => setSymbolUrl(url)}
      />
      <TshirtMockup symbolUrl={symbolUrl} />
    </div>
  );
};

export default App;
