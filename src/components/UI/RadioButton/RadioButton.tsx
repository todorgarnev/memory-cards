import React, { FunctionComponent } from 'react';
import './RadioButton.scss';

import { InputGroupName } from '../../../shared/enums/inputGroupName';

interface RadioButtonProps {
  name: InputGroupName;
  subType: string;
}

const RadioButton: FunctionComponent<RadioButtonProps> = ({ name, subType }) => (
  <div className='option'>
    <input type='radio' id={subType} name={name} value={subType} />
    <label htmlFor={subType}>{subType}</label>
  </div>
);

export default RadioButton;