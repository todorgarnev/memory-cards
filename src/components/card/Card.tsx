import React, { FunctionComponent, useContext } from 'react';
import './Card.scss';

import { ICard } from '../../shared/interfaces/ICard';
import { Context } from '../../shared/store/settingsStore';
import { CardBackgroundType } from '../../shared/enums/cardBackgroundType';

interface CardProps {
  item: ICard,
  getSelectedItem: (selectedItem: ICard) => void
}

const Card: FunctionComponent<CardProps> = ({ item, getSelectedItem }: CardProps) => {
  const [state] = useContext(Context);
  const { backgroundType, animationType } = state;
  const { value, active, selected } = item;

  return (
    <div className={`card${selected ? ' selected' : ''}${!active ? ' inactive' : ''} ${animationType}`} onClick={() => getSelectedItem(item)}>
      <div className='card-inner'>
        <div className='card-front'></div>
        <div className={`card-back ${backgroundType} ${backgroundType}-${value}`}>
          {state.backgroundType === CardBackgroundType.Numbers && value}
        </div>
      </div>
    </div>
  );
}

export default Card;