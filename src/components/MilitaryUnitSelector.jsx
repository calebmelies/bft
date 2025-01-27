import React from 'react';
console.log("MilitaryUnitSelector rendered");

// Updated unit options with the LAV-25
const unitOptions = [
  { value: 'infantry', label: 'Infantry' },
  { value: 'armor', label: 'Armor' },
  { value: 'artillery', label: 'Artillery' },
  { value: 'aviation', label: 'Aviation' },
  { value: 'lav25', label: 'LAV-25 (1st Light Armored Reconnaissance)' }, // New option added
];

const MilitaryUnitSelector = ({ onUnitSelect }) => {
  return (
      <div>
        <h2>Find Your Military Unit</h2>
        {/*<select onChange={(e) => onUnitSelect(e.target.value)} defaultValue="lav25">*/}
        {/*  <option value="" disabled>*/}
        {/*    Choose a unit...*/}
        {/*  </option>*/}
        {/*  {unitOptions.map((unit) => (*/}
        {/*      <option key={unit.value} value={unit.value}>*/}
        {/*        {unit.label}*/}
        {/*      </option>*/}
        {/*  ))}*/}
        {/*</select>*/}
          <select
              onChange={(e) => {
                  console.log("Selected value:", e.target.value);
                  onUnitSelect(e.target.value);
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
      </div>
  );

};

export default MilitaryUnitSelector;
