import React, { FunctionComponent } from 'react';
import { ICard } from '../../shared/Card.interface';
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
    <div className='card' onClick={getSelectedItem}>
      <div className='card-inner'>
        <div className='card-front'></div>
        <div className='card-back'>{props.item.value}</div>
      </div>
    </div>
  );
}

export default Card;