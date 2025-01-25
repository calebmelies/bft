import React from 'react';

const unitOptions = [
  { value: 'infantry', label: 'Infantry' },
  { value: 'armor', label: 'Armor' },
  { value: 'artillery', label: 'Artillery' },
  { value: 'aviation', label: 'Aviation' },
];

const MilitaryUnitSelector = ({ onUnitSelect }) => {
  return (
    <div>
      <h2>Select Your Military Unit</h2>
      <select onChange={(e) => onUnitSelect(e.target.value)} defaultValue="">
        <option value="" disabled>
          Choose a unit...
        </option>
        {unitOptions.map((unit) => (
          <option key={unit.value} value={unit.value}>
            {unit.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MilitaryUnitSelector;
