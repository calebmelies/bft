import React, { useState } from 'react';
import MilitaryUnitSelector from './MilitaryUnitSelector';
import TshirtMockup from './TshirtMockup';

const App = () => {
  const [unitSymbol, setUnitSymbol] = useState('');

  const handleUnitSelect = (symbol) => {
    setUnitSymbol(symbol); // Update the symbol URL
  };

  return (
    <div>
      <h1>Military T-Shirt Designer</h1>
      <MilitaryUnitSelector onUnitSelect={handleUnitSelect} />
      {unitSymbol && (
        <div>
          <h3>Unit Symbol for T-shirt</h3>
          <img src={unitSymbol} alt="Selected Unit Symbol" style={{ width: 100 }} />
        </div>
      )}
      {unitSymbol && <TshirtMockup unitSymbol={unitSymbol} />}
    </div>
  );
};

export default App;
