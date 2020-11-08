import React, { FunctionComponent, useContext } from 'react';
import './Card.scss';

import { ICard } from '../../shared/interfaces/ICard';
import { Context } from '../../shared/store/settingsStore';

interface CardProps {
  item: ICard,
  getSelectedItem: (selectedItem: ICard) => void
}

const Card: FunctionComponent<CardProps> = ({ item, getSelectedItem }: CardProps) => {
  const [state] = useContext(Context);
  const { backgroundType } = state;
  const { value, active, selected } = item;

  return (
    <div className={`card${selected ? ' selected' : ''}${!active ? ' inactive' : ''}`} onClick={() => getSelectedItem(item)}>
      <div className='card-inner'>
        <div className='card-front'></div>
        <div className={`card-back ${backgroundType} ${backgroundType}-${value}`}>
          {state.backgroundType === 'numbers' && value}
        </div>
      </div>
    </div>
  );
}

export default Card;