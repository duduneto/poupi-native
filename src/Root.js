// import Packages
import React from 'react';
import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';

// // import Internals
// import {store, persistor} from './config/redux/reduxConfig';
import {store} from './config/redux/reduxConfig';
import Routes from './screens/Routes';

export default () => (
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <Routes />
    {/* </PersistGate> */}
  </Provider>
);
