import React, { useState } from 'react';

// Updated unit options
const unitOptions = [
    { value: 'infantry', label: 'Infantry' },
    { value: 'armor', label: 'Armor' },
    { value: 'artillery', label: 'Artillery' },
    { value: 'aviation', label: 'Aviation' },
    { value: 'lav25', label: 'LAV-25 (1st Light Armored Reconnaissance)' },
];

const MilitaryUnitSelector = ({ onUnitSelect }) => {
    const [selectedUnit, setSelectedUnit] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setSelectedUnit(value);
        onUnitSelect(value); // Pass the value up to the parent component
    };

    return (
        <div>
            <h2>Find Your Military Unit</h2>
            {/* Div to display the selected value */}
            <div>d
                {selectedUnit ? <p>Selected Unit: {selectedUnit}</p> : <p>Please select a unit</p>}
            </div>
            <select onChange={handleChange} defaultValue="">
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
