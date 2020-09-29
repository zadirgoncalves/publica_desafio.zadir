import React from 'react';
import Game from './pages/game';

import './global.css';

import rootReducer from './store/game/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

const App: React.FC = () => {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}

export default App;
