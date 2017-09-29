import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './root-epic';
import logger from 'redux-logger';
import reducer from './reducers';
import { Provider } from 'react-redux';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import LoginContainer from './login/login-container';
import CardsList from './cards-list/cards-list.component';

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
  reducer,
  applyMiddleware(epicMiddleware, logger),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <LocaleProvider locale={enUS}>
        <App>
          <Route exact path="/" component={LoginContainer} />
          <Route path="/all-cards" component={CardsList} />
        </App>
      </LocaleProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
