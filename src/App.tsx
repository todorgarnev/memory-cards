import React, { useEffect, useState } from 'react';
import './App.scss';

import Card from './components/card/Card';

const App = () => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[] | []>([]);
  const numbers: number[] = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 5, 5];

  useEffect(() => {
    console.log(selectedNumbers);
    console.log(selectedNumbers.length);

    if (selectedNumbers.length > 1 && selectedNumbers[0] === selectedNumbers[1]) {
      console.log('TRUE');
    } else {
      console.log('FALSE');
    }

    if (selectedNumbers.length > 1) {
      setSelectedNumbers([]);
    }
  }, [selectedNumbers]);

  const setNumber = (selectedNumber: number) => {
    setSelectedNumbers([...selectedNumbers, selectedNumber]);
  }

  return (
    <div className="app">
      {
        numbers.map((value, index) => {
          return <Card key={index} number={value} setNumber={setNumber} />
        })
      }
    </div>
  );
}

export default App;
