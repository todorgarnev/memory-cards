import React, { useEffect, useState } from 'react';
import './App.scss';

import Card from './components/card/Card';
import * as Utils from './shared/Utils';

const App = () => {
  const [selectedNumbers, setSelectedNumbers] = useState<any>([]);
  const [win, setWin] = useState<boolean>(false);
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
    if (selectedNumbers.length === 2) {
      if (selectedNumbers[0].value === selectedNumbers[1].value) {
        setItems((items: any) => Utils.setSelectedItemsToUnactive(items, selectedNumbers[0].key, selectedNumbers[1].key));
        setWin(() => Utils.checkAllSelected(items));
      } else {
        setItems((items: any) => Utils.unselectAll(items));
      }
      setSelectedNumbers([]);
    }
  }, [selectedNumbers, items]);

  const getSelectedItem = (selectedItem: any) => {
    setSelectedNumbers([...selectedNumbers, selectedItem]);
    setItems(Utils.setSelectedItem(items, selectedItem.key));
  }

  return (
    <div className="app">
      <div className="game">
        {
          items.map((item: any) => {
            return <Card key={item.key} item={item} getSelectedItem={getSelectedItem} />
          })
        }
      </div>
      {win ? <div className='win'>Congrats</div> : ''}
    </div>
  );
}

export default App;
