// import packages
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// import internals
import { Router } from "./config/router/packs";

// import internals
import { store, persistor } from "./config/redux";
import children from "./config/router/routeConfig";

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>{children}</Router>
      </PersistGate>
    </Provider>
  );
};
