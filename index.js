import React from "react";
import { render } from "react-dom";
import AppContainer from './src/containers/AppContainer';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';

const appStore = createStore(reducers);

render(
  <Provider store={appStore}>
    <AppContainer />
  </Provider>, document.getElementById('root')
);

