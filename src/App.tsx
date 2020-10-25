import React, { useEffect, useState } from 'react';
import './App.scss';

import Card from './components/card/Card';
import * as Utils from './shared/Utils';

const App = () => {
  const [selectedItems, setSelectedItems] = useState<any>([]);
  const [win, setWin] = useState<boolean>(false);
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    setItems(Utils.getInitialGameItems(12));

    console.log(Utils.getInitialGameItems(12));
  }, []);

  useEffect(() => {
    if (selectedItems.length === 2) {
      if (selectedItems[0].value === selectedItems[1].value) {
        setItems((items: any) => Utils.setSelectedItemsToUnactive(items, selectedItems[0].key, selectedItems[1].key));
        setWin(() => Utils.checkAllSelected(items));
      } else {
        setTimeout(() => {
          setItems((items: any) => Utils.unselectAll(items));
        }, 1000);
      }
      setSelectedItems([]);
    }
  }, [selectedItems, items]);

  const getSelectedItem = (selectedItem: any) => {
    setSelectedItems([...selectedItems, selectedItem]);
    setItems(Utils.setSelectedItem(items, selectedItem.key));
  }

  const startAgain = (): void => {
    setItems(Utils.getInitialGameItems(12));
    setWin(false);
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
      {win ? <button className='start-game' onClick={startAgain}>Start again</button> : ''}
    </div>
  );
}

export default App;
