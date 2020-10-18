import React, { FunctionComponent, useState } from 'react';
import './Card.scss';

interface CardProps {
  number: number,
  setNumber: Function
}

const Card: FunctionComponent<CardProps> = (props: CardProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const onClick = () => {
    setIsClicked(true);
    props.setNumber(props.number);
  }

  return (
    <div className={`card ${isClicked ? 'clicked' : ''}`} onClick={onClick}>{props.number}</div>
  )
}

export default Card;