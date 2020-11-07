import React, { FunctionComponent } from 'react';
import './RadioGroup.scss';

interface RadioGroupProps { }

const RadioGroup: FunctionComponent<RadioGroupProps> = () => {

  // maybe a radio buttons component which set the choice in global context
  // store different radio options in contants
  return (
    <div className='settings-panel'>
      <div className='card-background-type'>
        <p>Card type:</p>
        <input type='radio' id='numbers' name='bgType' value='numbers' />
        <label htmlFor='numbers'>Numbers</label>
        <input type='radio' id='animals' name='bgType' value='animals' />
        <label htmlFor='animals'>Animals</label>
        <input type='radio' id='items' name='bgType' value='items' />
        <label htmlFor='items'>Items</label>
      </div>

      <div className='game-size'>
        <p>Game size:</p>
        <input type='radio' id='9' name='size' value='9' />
        <label htmlFor='9'>9 cards</label>
        <input type='radio' id='16' name='size' value='16' />
        <label htmlFor='16'>16 cards</label>
        <input type='radio' id='25' name='size' value='25' />
        <label htmlFor='25'>25 cards</label>
        <input type='radio' id='32' name='size' value='32' />
        <label htmlFor='32'>32 cards</label>
      </div>

      <div className='card-guess-animation'>
        <p>Card animation:</p>
        <input type='radio' id='rotate' name='animation' value='rotate' />
        <label htmlFor='rotate'>Rotate</label>
        <input type='radio' id='shake' name='animation' value='shake' />
        <label htmlFor='shake'>Shake</label>
        <input type='radio' id='pulse' name='animation' value='pulse' />
        <label htmlFor='pulse'>Pulse</label>
      </div>
    </div>
  );
}

export default RadioGroup;