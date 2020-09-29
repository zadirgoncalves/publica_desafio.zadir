import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import ReactDOM from 'react-dom';
import GameForm from './components/form';


import rootReducer from './store/game/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import GameTable from './components/table';

const store = createStore(rootReducer);


it('render the component Form without crashing', () => {
    const div = document.createElement('div');
    render(
      <Provider store={store}>
        <GameForm />
      </Provider>
    );
});


it('render the component GameTable without crashing', () => {
  const div = document.createElement('div');
  render(
    <Provider store={store}>
      <GameTable />
    </Provider>
  );
});