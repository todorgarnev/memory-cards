import React, { FunctionComponent, useContext } from 'react';
import './RadioButton.scss';

import { InputGroupName } from '../../../shared/enums/inputGroupName';
import { Context } from '../../../shared/store/gameStore';

interface RadioButtonProps {
  name: InputGroupName;
  subType: string;
}

const RadioButton: FunctionComponent<RadioButtonProps> = ({ name, subType }) => {
  const [state, dispatch] = useContext(Context);
  const { backgroundType, gameSize, animationType } = state.settings;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputNameType: string = e.target.name;
    const value: string = e.target.value;

    switch (inputNameType) {
      case InputGroupName.cardBackground:
        dispatch({ type: 'SET_BACKGROUND_TYPE', payload: value });
        break;
      case InputGroupName.animation:
        dispatch({ type: 'SET_ANIMATION_TYPE', payload: value });
        break;
      case InputGroupName.size:
        dispatch({ type: 'SET_GAME_SIZE', payload: value });
        break;
    }
  }

  const onChecked = (subType: string) => {
    switch (subType) {
      case backgroundType:
      case gameSize:
      case animationType:
        return true;
      default:
        return false;
    }
  }

  return (
    <div className='option'>
      <input type='radio' id={subType} name={name} value={subType} onChange={(e) => onChange(e)} checked={onChecked(subType)} />
      <label htmlFor={subType}>{subType}</label>
    </div>
  );
}

export default RadioButton;