import React, { useEffect, useState } from 'react';
import './App.scss';

import Card from './components/card/Card';
import * as Utils from './shared/Utils';

const App = () => {
  const [selectedItems, setSelectedItems] = useState<any>([]);
  const [items, setItems] = useState<any>([]);
  const [blocked, setBlocked] = useState<boolean>(false);
  const [win, setWin] = useState<boolean>(false);

  useEffect(() => {
    setItems(Utils.getInitialGameItems(12));
  }, []);

  useEffect(() => {
    if (selectedItems.length === 2) {
      setBlocked(true);

      if (selectedItems[0].value === selectedItems[1].value) {
        setItems((items: any) => Utils.setSelectedItemsToUnactive(items, selectedItems[0].key, selectedItems[1].key));
        setWin(() => Utils.checkAllSelected(items));
        setBlocked(false);
      } else {
        setTimeout(() => {
          setItems((items: any) => Utils.unselectAll(items));
          setBlocked(false);
        }, 1000);
      }

      setSelectedItems([]);
    }
  }, [selectedItems, items]);

  const getSelectedItem = (selectedItem: any) => {
    if (selectedItems.length < 2) {
      setSelectedItems([...selectedItems, selectedItem]);
      setItems(Utils.setSelectedItem(items, selectedItem.key));
    }
  }

  const startAgain = (): void => {
    setItems(Utils.getInitialGameItems(12));
    setWin(false);
  }

  return (
    <div className="app">
      <div className={`game${blocked ? ' blocked' : ''}`}>
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
