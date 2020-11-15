import React, { FunctionComponent } from 'react';
import './SettingsPanel.scss';

import RadioGroup from './RadioGroup/RadioGroup';
import { GroupType } from '../../shared/enums/groupType';

interface SettingsPanelProps { }

const SettingsPanel: FunctionComponent<SettingsPanelProps> = () => {
  return (
    <div className="settings-panel">
      <RadioGroup groupType={GroupType.CardBackgroundType} />
      <RadioGroup groupType={GroupType.GameSize} />
      <RadioGroup groupType={GroupType.CardAnimation} />
    </div>
  );
}

export default SettingsPanel;