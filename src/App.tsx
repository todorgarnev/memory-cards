import React, { FunctionComponent, useContext } from 'react';
import './App.scss';

import SettingsPanel from './components/settings/SettingsPanel';
import Game from './components/Game/Game';
import { Context } from './shared/store/gameStore';

const App: FunctionComponent = () => {
  const [state] = useContext(Context);
  const { started } = state.game;

  return (
    <div className="app">
      {!started && <SettingsPanel />}
      <Game />
    </div>
  );
}

export default App;
