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
  const [MilSymbol, setMilSymbol] = useState(null); // State to store the MilSymbol class

  useEffect(() => {
    // Dynamically import milsymbol when the component mounts
    import('milsymbol').then((module) => {
      setMilSymbol(module.default || module); // Store the MilSymbol class
    });
  }, []); // This effect runs only once after the component mounts

  const generateSymbol = (unit) => {
    if (MilSymbol) {
      let symbol;

      // Logic to generate symbol based on selected unit
      if (unit === 'lav25') {
        // LAV-25 symbol generation using milsymbol
        symbol = new MilSymbol('G*G*C*A*C' + '1505000000', { modifier: 'Reconnaissance', affiliation: 'F' });
      } else {
        // Default symbol generation (use other codes for different unit types)
        symbol = new MilSymbol('G*G*F*C*A', { affiliation: 'F' });
      }

      // Set the symbol as a base64-encoded string
      setUnitSymbol(symbol.asCanvas().toDataURL());
    }
  };

  useEffect(() => {
    if (unitSymbol) {
      // When symbol is available, pass it to parent component
      onUnitSelect(unitSymbol);
    }
  }, [unitSymbol, onUnitSelect]);

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

      <div>
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
