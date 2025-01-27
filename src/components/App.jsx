
import React, { useState } from 'react';
import MilitaryUnitSelector from './MilitaryUnitSelector';
import TshirtMockup from './TshirtMockup'; // Adjust the path if the file is in a different location
const App = () => {
  const [unitSymbol, setUnitSymbol] = useState('');

  const handleUnitSelect = (symbol) => {
      console.log(symbol)
      setUnitSymbol(symbol); // Update the symbol URL
  };
  // chrome.storage.session.setAccessLevel({ accessLevel: 'TRUSTED_AND_UNTRUSTED_CONTEXTS' });
  try{
    console.log("rendering App:")
                
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
      <h1>Military T-Shirt Designer</h1>
      <MilitaryUnitSelector onUnitSelect={handleUnitSelect} />
      
      {unitSymbol && (
        <div style={{ marginTop: '40px' }}>
          <h3>Your T-shirt Mockup</h3>
          <div
            style={{
              width: '300px',
              height: '400px',
              margin: '0 auto',
              position: 'relative',
              backgroundColor: '#f8f9fa',
              border: '2px solid #000',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Display the T-shirt image */}
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundImage: 'url(src/components/images/tshirt.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
              }}
            ></div>

            {/* Overlay the unit symbol */}
            <img
              src={unitSymbol}
              alt="Unit Symbol"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80px', // Adjust size as needed
                height: 'auto',
              }}
            />
          </div>
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
