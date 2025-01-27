import React, { useEffect, useState } from 'react';
import milsymbol from '../../packages/milsymbol'; // Ensure this library is compatible with your environment

const MilitaryUnitSelector = ({ onUnitSelect }) => {
  const [unitOptions, setUnitOptions] = useState([]);

  // Refactor to avoid useEffect storage-related issues
  const generateUnitOptions = () => {
    try {
      // Generate unit options dynamically using milsymbol
      const options = [
        {
          label: 'LAV-25, 1st LAR',
          value: new milsymbol.Symbol().setOptions({ icon: 'unit', affiliation: 'Friendly' }).asSVG(),
        },
        {
          label: 'Tank Unit',
          value: new milsymbol.Symbol().setOptions({ icon: 'tank', affiliation: 'Friendly' }).asSVG(),
        },
        {
          label: 'Infantry Unit',
          value: new milsymbol.Symbol().setOptions({ icon: 'infantry', affiliation: 'Friendly' }).asSVG(),
        },
      ];
      return options;
    } catch (error) {
      console.error('Error generating unit options:', error);
      return [];
    }
  };

  useEffect(() => {
    // Initialize options only on the client side
    if (typeof window !== 'undefined') {
      console.log('Initializing unit options');
      const options = generateUnitOptions();
      setUnitOptions(options);
    }
  }, []);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    console.log('Selected option:', selectedValue);
    onUnitSelect(selectedValue);
  };

  return (
    <div>
      <label htmlFor="unitSelector">Select a Military Unit:</label>
      <select id="unitSelector" onChange={handleChange} defaultValue="">
        <option value="" disabled>
          Select a unit
        </option>
        {unitOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MilitaryUnitSelector;
