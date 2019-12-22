// import packages
import React from "react";
import { Provider } from "react-redux";

// import internals
import { Router } from "./config/router/packs";

// import internals
import store from "./config/redux/sync";
import children from "./config/router/routeConfig";

export default () => {
  return (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
};
