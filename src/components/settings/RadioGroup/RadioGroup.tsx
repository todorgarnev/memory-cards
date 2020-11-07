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

const RadioGroup: FunctionComponent<RadioGroupProps> = ({ groupType }) => (
  <div className='radio-group'>
    <h4 className='title'>{groupType}</h4>

    <div className='options-section'>
      {
        SettingsPanel.getGroupSubTypeArray(groupType).map((item: string, index: number) => {
          const subType: string = SettingsPanel.getGroupSubType(groupType)[item];
          const name: InputGroupName = SettingsPanel.getGroupName(groupType);

          return <RadioButton key={index} name={name} subType={subType} />
        })
      }
    </div>
  </div>
);

export default RadioGroup;