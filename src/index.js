import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './root-epic';
import logger from 'redux-logger';
import reducer from './reducers';
import { Provider } from 'react-redux';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
  reducer,
  applyMiddleware(epicMiddleware, logger),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
