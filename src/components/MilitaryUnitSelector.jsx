// src/components/MilitaryUnitSelector.jsx
import React from "react";
import Select from "react-select";

const unitOptions = [
  { value: "infantry", label: "Infantry" },
  { value: "armor", label: "Armor" },
  { value: "artillery", label: "Artillery" },
  { value: "aviation", label: "Aviation" },
];

const MilitaryUnitSelector = ({ onUnitSelect }) => {
  return (
    <div>
      <h2>Select Your Military Unit</h2>
      <Select
        options={unitOptions}
        onChange={(selectedOption) => onUnitSelect(selectedOption.value)}
        placeholder="Choose a unit..."
      />
    </div>
  );
};

export default MilitaryUnitSelector;
