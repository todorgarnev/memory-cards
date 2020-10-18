import React, { useEffect, useState } from 'react';
import './App.scss';

import Card from './components/card/Card';
import * as Utils from './shared/Utils';

const App = () => {
  const [selectedNumbers, setSelectedNumbers] = useState<any>([]);
  const [items, setItems] = useState<any>([
    { key: 0, value: 0, selected: false, active: true },
    { key: 1, value: 1, selected: false, active: true },
    { key: 2, value: 2, selected: false, active: true },
    { key: 3, value: 3, selected: false, active: true },
    { key: 4, value: 0, selected: false, active: true },
    { key: 5, value: 1, selected: false, active: true },
    { key: 6, value: 2, selected: false, active: true },
    { key: 7, value: 3, selected: false, active: true },
    { key: 8, value: 4, selected: false, active: true },
    { key: 9, value: 4, selected: false, active: true },
    { key: 10, value: 5, selected: false, active: true },
    { key: 11, value: 5, selected: false, active: true }
  ]);

  useEffect(() => {
    console.log(selectedNumbers);
    console.log(selectedNumbers.length);

    if (selectedNumbers.length > 1 && selectedNumbers[0].value === selectedNumbers[1].value) {
      console.log('TRUE');
      setItems(Utils.setSelectedItemsToUnactive(items, selectedNumbers[0].key, selectedNumbers[1].key));
    } else {
      console.log('FALSE');
    }

    if (selectedNumbers.length > 1) {
      setSelectedNumbers([]);
      setItems(Utils.unselectAll(items));
    }
  }, [selectedNumbers, items]);

  const getSelectedItem = (selectedItem: any) => {
    setSelectedNumbers([...selectedNumbers, selectedItem]);
    setItems(Utils.setSelectedItem(items, selectedItem.key));
  }

  return (
    <div className="app">
      {
        items.map((item: any) => {
          return <Card key={item.key} item={item} getSelectedItem={getSelectedItem} />
        })
      }
    </div>
  );
}

export default App;
