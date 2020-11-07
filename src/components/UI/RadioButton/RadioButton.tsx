import React, { FunctionComponent } from 'react';
import './RadioButton.scss';

interface RadioButtonProps { }

const RadioButton: FunctionComponent<RadioButtonProps> = () => {

  return (
    <div className="option">
      <input type='radio' id='numbers' name='bgType' value='numbers' />
      <label htmlFor='numbers'>Numbers</label>
    </div>
  );
}

export default RadioButton;