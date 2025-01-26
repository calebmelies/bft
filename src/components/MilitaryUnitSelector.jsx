import React, { useEffect, useState } from 'react';
import { Symbol } from '@spatialillusions/unit-symbolizer';

const MilitarySymbol = ({ unitType }) => {
  const [symbolUrl, setSymbolUrl] = useState('');

  useEffect(() => {
    if (unitType) {
      const generateSymbol = async () => {
        let symbol;

        if (unitType === 'lav25') {
          // LAV-25 symbol generation
          symbol = new Symbol()
            .set('symbolset', 10)
            .set('entity', '1515010000') // LAV-25 code
            .set('modifier', 'Reconnaissance')
            .set('affiliation', 'Friendly')
            .set('echelon', 'I');
        } else {
          // Default example for other units
          symbol = new Symbol()
            .set('symbolset', 10)
            .set('entity', unitType) // Map unitType directly to entity for other options
            .set('affiliation', 'Friendly');
        }

        setSymbolUrl(symbol.asCanvas().toDataURL());
      };

      generateSymbol();
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
