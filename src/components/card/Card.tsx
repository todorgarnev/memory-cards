import React, { FunctionComponent } from 'react';
import { ICard } from '../../shared/card.interface';
import './Card.scss';

interface CardProps {
  item: ICard,
  getSelectedItem: (selectedItem: ICard) => void
}

const Card: FunctionComponent<CardProps> = ({ item, getSelectedItem }: CardProps) => {
  const { value, active, selected } = item;
  const selectedItem = () => {
    getSelectedItem(item);
  }

  return (
    <div className={`card${selected ? ' selected' : ''}${!active ? ' inactive' : ''}`} onClick={selectedItem}>
      <div className='card-inner'>
        <div className='card-front'></div>
        <div className={`card-back items items-${value}`}></div>
        {/* <div className='card-back'>{value}</div> */}
      </div>
    </div>
  );
}

export default Card;