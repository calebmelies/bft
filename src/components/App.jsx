import React, { useState } from 'react';
import MilitaryUnitSelector from './MilitaryUnitSelector';

const App = () => {
  const [unitSymbol, setUnitSymbol] = useState('');

  const handleUnitSelect = (symbol) => {
    console.log('Selected symbol:', symbol);
    setUnitSymbol(symbol); // Update the symbol URL
  };

  try {
    console.log('Rendering App component');
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Military T-Shirt Designer</h1>
        <MilitaryUnitSelector onUnitSelect={handleUnitSelect} />
        
        {unitSymbol && (
          <div>
            <h3>Your T-Shirt Mockup</h3>
            <img src={unitSymbol} alt="Unit Symbol" />
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('Error in App component:', error);
    return <div>Something went wrong in the App component.</div>;
  }
};

export default App;
