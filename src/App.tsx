import React, { FunctionComponent } from 'react';
import './App.scss';

import SettingsPanel from './components/settings/SettingsPanel';
import Game from './components/Game/Game';

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <SettingsPanel />
      <Game />
    </div>
  );
}

export default App;
