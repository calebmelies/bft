import React, { useEffect, useState } from "react";

const MilitarySymbol = ({ unitType }) => {
  const [symbolUrl, setSymbolUrl] = useState("");
  const [Symbol, setSymbol] = useState(null);

  useEffect(() => {
    // Dynamically import the symbolizer module in the browser
    const loadSymbolizer = async () => {
      const { Symbol } = await import("milsymbol");
      setSymbol(Symbol);
    };

    if (unitType) {
      loadSymbolizer();
    }
  }, [unitType]);

  useEffect(() => {
    if (Symbol && unitType) {
      const symbol = new Symbol()
        .set("symbolset", 10) // Use Symbol Set for Land Units
        .set("entity", unitType); // Set dynamic entity
      setSymbolUrl(symbol.asCanvas().toDataURL());
    }
  }, [Symbol, unitType]);

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
