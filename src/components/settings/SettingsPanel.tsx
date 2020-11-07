import React, { FunctionComponent } from 'react';
import './SettingsPanel.scss';

import RadioGroup from './RadioGroup/RadioGroup';
import { GroupType } from '../../shared/enums/groupType';

interface SettingsPanelProps { }

const SettingsPanel: FunctionComponent<SettingsPanelProps> = () => {

  // maybe a radio buttons component which set the choice in global context
  // store different radio options in contants
  return (
    <div className="settings-panel">
      <RadioGroup groupType={GroupType.CardBackgroundType} />
    </div>
  );
}

export default SettingsPanel;