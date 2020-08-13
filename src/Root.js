// ----------- import Packs
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// ----------- import Internals
import { store, persistor } from './config/redux/reduxConfig';

// import AllApp from './project/screens/A0_AllApp';
import CURRSC from './project/screens/A1_Signin';

// ----------- set Default Component
export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <CURRSC />
      {/* <AllApp /> */}
    </PersistGate>
  </Provider>
);
