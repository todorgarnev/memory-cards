import React, { FunctionComponent, useEffect, useState } from 'react';
import './App.scss';

import Card from './components/card/Card';
import SettingsPanel from './components/settings/SettingsPanel';
import { ICard } from './shared/card.interface';
import * as Utils from './shared/utils';
import * as Constants from './shared/constants';

const App: FunctionComponent = () => {
  const [selectedItems, setSelectedItems] = useState<ICard[]>([]);
  const [items, setItems] = useState<ICard[]>([]);
  const [blocked, setBlocked] = useState<boolean>(false);
  const [win, setWin] = useState<boolean>(false);

  useEffect(() => {
    setItems(Utils.getInitialGameItems(12));
  }, []);

  useEffect(() => {
    if (selectedItems.length === 2) {
      setBlocked(true);

      if (selectedItems[0].value === selectedItems[1].value) {
        setItems((items: ICard[]) => Utils.setSelectedItemsToUnactive(items, selectedItems[0].key, selectedItems[1].key));
        setTimeout(() => {
          setBlocked(false);
          setWin(() => Utils.checkAllSelected(items));
        }, Constants.guessedTimeout);
      } else {
        setTimeout(() => {
          setItems((items: ICard[]) => Utils.unselectAll(items));
          setBlocked(false);
        }, Constants.notGuessedTimeout);
      }

      setSelectedItems([]);
    }
  }, [selectedItems, items]);

  const getSelectedItem = (selectedItem: ICard) => {
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
      <SettingsPanel />
      <div className={`game${blocked ? ' blocked' : ''}`}>
        {
          items.map((item: ICard) => {
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
