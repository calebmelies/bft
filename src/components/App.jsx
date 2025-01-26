import React, { useState } from 'react';
import MilitaryUnitSelector from './MilitaryUnitSelector';
import MilitarySymbol from './MilitarySymbol';
import TshirtMockup from './TshirtMockup';

const App = () => {
  const [unitType, setUnitType] = useState('');

  const handleUnitSelect = (unit) => {
    setUnitType(unit);
  };

  return (
    <div>
      <h1>Military T-Shirt Designer</h1>
      <MilitaryUnitSelector onUnitSelect={handleUnitSelect} />
      {unitType && <MilitarySymbol unitType={unitType} />}
      {unitType && <TshirtMockup unitType={unitType} />}
    </div>
  );
};

export default App;
