import React, { useState } from 'react';
import MilitaryUnitSelector from './MilitaryUnitSelector';

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
        <div style={{ marginTop: '20px' }}>
          <h3>Selected Unit Symbol for T-shirt</h3>
          <img src={unitSymbol} alt="Selected Unit Symbol" style={{ width: 200 }} />
        </div>
      )}
    </div>
  );
};

export default App;
