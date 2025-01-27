import React, { useEffect, useState } from 'react';
import milsymbol from 'milsymbol';

const MilitaryUnitSelector = ({ onUnitSelect }) => {
  const [unitOptions, setUnitOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    console.log('MilitaryUnitSelector mounted');

    try {
      // Generate unit options using milsymbol
      const options = [
        { label: 'LAV-25, 1st LAR', value: new milsymbol.Symbol().setOptions({ affiliation: 'Friendly' }).asSVG() },
        { label: 'Tank', value: new milsymbol.Symbol().setOptions({ icon: 'tank' }).asSVG() },
      ];
      setUnitOptions(options);
      console.log('Unit options:', options);
    } catch (error) {
      console.error('Error generating unit options:', error);
    }
  }, []);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    console.log('Selected option:', selectedValue);
    setSelectedOption(selectedValue);
    onUnitSelect(selectedValue);
  };

  return (
    <div>
      <label htmlFor="unitSelector">Select a Military Unit:</label>
      <select id="unitSelector" onChange={handleChange} value={selectedOption}>
        <option value="" disabled>Select a unit</option>
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
