import React, { FunctionComponent } from 'react';
import { ICard } from '../../shared/Card.interface';
import './Card.scss';

interface CardProps {
  item: ICard,
  getSelectedItem: Function
}

const Card: FunctionComponent<CardProps> = (props: CardProps) => {
  const onClick = () => {
    props.getSelectedItem(props.item);
  }

  return (
    <div className={`card${props.item.selected ? ' selected' : ''}`} onClick={onClick}>{props.item.value}</div>
  )
}

export default Card;