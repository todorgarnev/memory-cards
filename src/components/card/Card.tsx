import React, { FunctionComponent } from 'react';
import './Card.scss';

interface CardProps {
  item: {
    key: number,
    value: number,
    selected: boolean,
    active: boolean
  },
  getSelectedItem: Function
}

const Card: FunctionComponent<CardProps> = (props: CardProps) => {
  const onClick = () => {
    props.getSelectedItem(props.item);
  }

  return (
    <div className={`card ${props.item.selected ? 'selected' : ''}`} onClick={onClick}>{props.item.value}</div>
  )
}

export default Card;