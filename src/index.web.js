// import packages
// import React from "react";
// import ReactDOM from "react-dom";
import { AppRegistry } from "react-native";

// import internals
import Root from "./Root";
import { name } from "./appInfo.json";

const rootElement = document.getElementById("root");

// React Native Web
AppRegistry.registerComponent(name, () => Root);
AppRegistry.runApplication(name, {
  rootTag: rootElement
});

// React Web
// ReactDOM.render(<Root />, rootElement);
