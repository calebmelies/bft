import React, { useState, useEffect } from 'react';

// Updated unit options with the LAV-25
const unitOptions = [
  { value: 'infantry', label: 'Infantry' },
  { value: 'armor', label: 'Armor' },
  { value: 'artillery', label: 'Artillery' },
  { value: 'aviation', label: 'Aviation' },
  { value: 'lav25', label: 'LAV-25 (1st Light Armored Reconnaissance)' }, // New option added
];

const MilitaryUnitSelector = ({ onUnitSelect }) => {
  const [unitSymbol, setUnitSymbol] = useState('');
  const [milSymbolLib, setMilSymbolLib] = useState(null); // State to store the milsymbol library

  // Dynamically import milsymbol on component mount
  useEffect(() => {
    import('milsymbol').then((module) => {
      setMilSymbolLib(module.default || module);
    });
  }, []);

  const generateSymbol = async (unit) => {
    if (milSymbolLib) {
      let symbol;

      // Generate symbol based on selected unit
      if (unit === 'lav25') {
        // LAV-25 symbol generation
        symbol = new milSymbolLib('SFGPUCI----E---', {
          modifier: 'Reconnaissance',
          affiliation: 'F',
        });
      } else if (unit === 'infantry') {
        symbol = new milSymbolLib('SFGPUCI----G---', { affiliation: 'F' });
      } else if (unit === 'armor') {
        symbol = new milSymbolLib('SFGPUCA----G---', { affiliation: 'F' });
      } else if (unit === 'artillery') {
        symbol = new milSymbolLib('SFGPUCR----G---', { affiliation: 'F' });
      } else if (unit === 'aviation') {
        symbol = new milSymbolLib('SFGPUCAH---G---', { affiliation: 'F' });
      }

      // Convert symbol to base64 image and update state
      if (symbol) {
        setUnitSymbol(symbol.asCanvas().toDataURL());
        onUnitSelect(symbol.asCanvas().toDataURL()); // Pass it to parent component
      }
    }
  };
  console.log('<img src={unitSymbol} alt="Unit Symbol" style={{ width: 100 }} />')
  console.log(unitSymbol)
  return (
    <div>
      <h2>Select Your Military Unit</h2>
      <select
        onChange={(e) => {
          const selectedUnit = e.target.value;
          generateSymbol(selectedUnit); // Generate the symbol on selection
        }}
        defaultValue=""
      >
        <option value="" disabled>
          Choose a unit...
        </option>
        {unitOptions.map((unit) => (
          <option key={unit.value} value={unit.value}>
            {unit.label}
          </option>
        ))}
      </select>

      <div style={{ marginTop: '20px' }}>
        <h3>Unit Symbol</h3>
        {unitSymbol ? (
          <img src={unitSymbol} alt="Unit Symbol" style={{ width: 100 }} />
        ) : (
          <p>Choose a unit to see its symbol.</p>
        )}
      </div>
    </div>
  );
};

export default MilitaryUnitSelector;
