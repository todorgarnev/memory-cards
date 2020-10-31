import React, { FunctionComponent } from 'react';
import { ICard } from '../../shared/card.interface';
import './Card.scss';

interface CardProps {
  item: ICard,
  getSelectedItem: Function
}

const Card: FunctionComponent<CardProps> = (props: CardProps) => {
  const getSelectedItem = () => {
    props.getSelectedItem(props.item);
  }

  return (
    <div className={`card${props.item.selected ? ' selected' : ''}${!props.item.active ? ' inactive' : ''}`} onClick={getSelectedItem}>
      <div className='card-inner'>
        <div className='card-front'></div>
        <div className='card-back'>{props.item.value}</div>
      </div>
    </div>
  );
}

export default Card;