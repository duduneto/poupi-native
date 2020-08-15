// ----------- import Packs
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// ----------- import Internals
import { store, persistor } from './config/redux';
// import Router from './config/allApp';
import Router from './config/router';

// ----------- set Default Component
export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>
);
