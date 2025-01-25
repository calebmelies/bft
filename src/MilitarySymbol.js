
import React, { useEffect, useState } from "react";
import { Symbol } from "@spatialillusions/unit-symbolizer";

const MilitarySymbol = ({ unitType }) => {
  const [symbolUrl, setSymbolUrl] = useState("");

  useEffect(() => {
    if (unitType) {
      const symbol = new Symbol()
        .set("symbolset", 10)
        .set("entity", unitType);
      setSymbolUrl(symbol.asCanvas().toDataURL());
    }
  }, [unitType]);

  return (
    <div>
      <h2>Military Symbol</h2>
      {symbolUrl ? (
        <img src={symbolUrl} alt={`${unitType} symbol`} style={{ width: 100 }} />
      ) : (
        <p>Select a unit to display its symbol.</p>
      )}
    </div>
  );
};

export default MilitarySymbol;
