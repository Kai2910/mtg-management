import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
} from 'react-router-dom';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
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
import RegisterContainer from './register/register-containter';

const epicMiddleware = createEpicMiddleware(rootEpic);
const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);

const store = createStore(
  reducer,
  applyMiddleware(epicMiddleware, routerMiddleware, logger),
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <LocaleProvider locale={enUS}>
        <App>
          <Route exact path="/" component={LoginContainer} />
          <Route path="/all-cards" component={CardsList} />
          <Route path="/register" component={RegisterContainer} />
        </App>
      </LocaleProvider>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
