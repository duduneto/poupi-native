// ----------- import Packs
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// ----------- import Internals
import { store, persistor } from "./config/redux/reduxConfig";

import AllApp from "./project/screens/A0_AllApp";

// ----------- set Default Component
export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AllApp />
    </PersistGate>
  </Provider>
);

// export default () => {
//   console.log("aqui!!!");
//   return <div>oi 3</div>;
// };
