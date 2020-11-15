import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import './Game.scss';

import Card from '../card/Card';
import { ICard } from '../../shared/interfaces/ICard';
import { Context } from '../../shared/store/settingsStore';
import * as GameLogic from '../../shared/utils/gameLogic';
import * as Constants from '../../shared/constants/constants';

interface GameProps { }

const Game: FunctionComponent<GameProps> = () => {
  const [state] = useContext(Context);
  const { gameSize } = state;
  const [items, setItems] = useState<ICard[]>([]);
  const [selectedItems, setSelectedItems] = useState<ICard[]>([]);
  const [blocked, setBlocked] = useState<boolean>(false);
  const [win, setWin] = useState<boolean>(false);

  useEffect(() => {
    setItems(GameLogic.getInitialGameItems(gameSize));
  }, [gameSize]);

  useEffect(() => {
    if (selectedItems.length === 2) {
      setBlocked(true);

      if (selectedItems[0].value === selectedItems[1].value) {
        setItems((items: ICard[]) => GameLogic.setSelectedItemsToUnactive(items, selectedItems[0].key, selectedItems[1].key));
        setTimeout(() => {
          setBlocked(false);
          setWin(() => GameLogic.checkAllSelected(items));
        }, Constants.guessedTimeout);
      } else {
        setTimeout(() => {
          setItems((items: ICard[]) => GameLogic.unselectAll(items));
          setBlocked(false);
        }, Constants.notGuessedTimeout);
      }

      setSelectedItems([]);
    }
  }, [selectedItems, items]);

  const getSelectedItem = (selectedItem: ICard) => {
    if (selectedItems.length < 2) {
      setSelectedItems([...selectedItems, selectedItem]);
      setItems(GameLogic.setSelectedItem(items, selectedItem.key));
    }
  }

  const startAgain = (): void => {
    setItems(GameLogic.getInitialGameItems(gameSize));
    setWin(false);
  }

  return (
    <React.Fragment>
      <div className={`game${blocked ? ' blocked' : ''}`}>
        {
          items.map((item: ICard) => {
            return <Card key={item.key} item={item} getSelectedItem={getSelectedItem} />
          })
        }
      </div>

      { win ? <div className='win'>congrats</div> : ''}
      { win ? <button className='start-game' onClick={startAgain}>Start again</button> : ''}
    </React.Fragment>
  );
}

export default Game;