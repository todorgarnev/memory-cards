import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import './Game.scss';

import Card from '../card/Card';
import { ICard } from '../../shared/interfaces/ICard';
import { Context } from '../../shared/store/gameStore';
import * as GameLogic from '../../shared/utils/gameLogic';
import * as Constants from '../../shared/constants/constants';

interface GameProps { }

const Game: FunctionComponent<GameProps> = () => {
  const [state, dispatch] = useContext(Context);
  const { settings, game } = state;
  const [items, setItems] = useState<ICard[]>([]);
  const [selectedItems, setSelectedItems] = useState<ICard[]>([]);
  const [blocked, setBlocked] = useState<boolean>(false);

  useEffect(() => {
    setItems(GameLogic.getInitialGameItems(settings.gameSize));
  }, [settings.gameSize]);

  useEffect(() => {
    if (selectedItems.length === 2) {
      setBlocked(true);
      dispatch({ type: 'INCREASE_MOVES_COUNTER' });

      if (selectedItems[0].value === selectedItems[1].value) {
        setItems((items: ICard[]) => GameLogic.setSelectedItemsToUnactive(items, selectedItems[0].key, selectedItems[1].key));
        setTimeout(() => {
          setBlocked(false);
          dispatch({ type: 'SET_GAME_STARTED', payload: !GameLogic.checkAllSelected(items) });
        }, Constants.guessedTimeout);
      } else {
        setTimeout(() => {
          setItems((items: ICard[]) => GameLogic.unselectAll(items));
          setBlocked(false);
        }, Constants.notGuessedTimeout);
      }

      setSelectedItems([]);
    }
  }, [selectedItems, items, dispatch]);

  const getSelectedItem = (selectedItem: ICard) => {
    if (selectedItems.length < 2) {
      setSelectedItems([...selectedItems, selectedItem]);
      setItems(GameLogic.setSelectedItem(items, selectedItem.key));
    }
  }

  const startAgain = (): void => {
    setItems(GameLogic.getInitialGameItems(settings.gameSize));
    dispatch({ type: 'SET_GAME_STARTED', payload: true });
    dispatch({ type: 'RESET_MOVES_COUNTER' });
  }

  return (
    <React.Fragment>
      {
        game.started &&
        <div className={`game size-${settings.gameSize}${blocked ? ' blocked' : ''}`}>
          {
            items.map((item: ICard) => {
              return <Card key={item.key} item={item} getSelectedItem={getSelectedItem} />
            })
          }
        </div>
      }

      {
        !game.started &&
        <div className='end-game'>
          {game.movesCounter > 0 &&
            <div className="counter">
              Moves: <span className='value'>{game.movesCounter}</span>
            </div>}
          <button className='start' onClick={startAgain}>Start</button>
        </div>
      }
    </React.Fragment>
  );
}

export default Game;