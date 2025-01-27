import React, { useState } from 'react';
import ms from 'milsymbol';
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
        // console.log('handleChange', e);
        const value = e.target.value;
        const unit = e.target.value;
        let symbol;
        console.log(unit);
        // Logic to generate symbol based on selected unit
        if (unit === 'lav25') {
            // LAV-25 symbol generation using milsymbol
            symbol = new ms.Symbol("130310001412110000000000000000");
            // var sym = new ms.Symbol("130310001412110000000000000000");
            // sym.setOptions({size:35});
            // var canvasElement = sym.asCanvas();
        } else {
            // Default symbol generation (use other codes for different unit types)
            symbol = new ms.Symbol('G*G*F*C*A', { affiliation: 'F' });
        }
        console.log("symbol:  - " + symbol);
        // Set the symbol as a base64-encoded string
        // setUnitSymbol(symbol.asCanvas().toDataURL());
        // console.log('value: ', value);
        // setSelectedUnit(value);
        // setSelectedUnit(symbol.asCanvas().toDataURL());
        // setSelectedUnit(symbol);
        // onUnitSelect(value); // Pass the value up to the parent component
        onUnitSelect(symbol.asCanvas().toDataURL()); // Pass the value up to the parent component
        // onUnitSelect(symbol); // Pass the value up to the parent component
    };

    return (
        <div>
            <h2>Find Your Military Unit</h2>
            {/* Div to display the selected value */}
            {/*<div>*/}
            {/*    {selectedUnit ? <p>Selected Unit: {selectedUnit}</p> : <p>Please select a unit</p>}*/}
            {/*</div>*/}
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
