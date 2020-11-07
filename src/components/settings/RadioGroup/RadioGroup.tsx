import React, { FunctionComponent } from 'react';
import './RadioGroup.scss';

import { CardBackgroundType } from '../../../shared/enums/cardBackgroundType';
import { GroupType } from '../../../shared/enums/groupType';
import { InputGroupName } from '../../../shared/enums/inputGroupName';
import RadioButton from '../../UI/RadioButton/RadioButton';
import * as SettingsPanel from '../../../shared/utils/settingsPanel';

interface RadioGroupProps {
  groupType: GroupType;
}

const RadioGroup: FunctionComponent<RadioGroupProps> = ({ groupType }) => {

  return (
    <div className='radio-group'>
      <h4 className='title'>{groupType}</h4>

      <div className='options-section'>
        {
          SettingsPanel.getGroupSubTypeArray(groupType).map((item: string, index: number) => {
            const subType: string = SettingsPanel.getGroupSubType(groupType)[item];
            const name: InputGroupName = SettingsPanel.getGroupName(groupType);

            console.log('2 >>', SettingsPanel.getGroupSubType(groupType)[item]);
            return <RadioButton key={index} name={name} subType={subType} />
          })
        }
      </div>
    </div>

    /*
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
    </div> */
  );
}

export default RadioGroup;