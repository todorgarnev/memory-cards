import React, { FunctionComponent, useContext } from 'react';
import './RadioButton.scss';

import { InputGroupName } from '../../../shared/enums/inputGroupName';
import { Context } from '../../../shared/store/settingsStore';

interface RadioButtonProps {
  name: InputGroupName;
  subType: string;
}

const RadioButton: FunctionComponent<RadioButtonProps> = ({ name, subType }) => {
  const [, dispatch] = useContext(Context);
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
    }
  }

  return (
    <div className='option'>
      <input type='radio' id={subType} name={name} value={subType} onChange={(e) => onChange(e)} />
      <label htmlFor={subType}>{subType}</label>
    </div>
  );
}

export default RadioButton;