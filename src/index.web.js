// import packages
import { AppRegistry } from "react-native";

// import internals
import App from "./App";
import { name } from "./appInfo.json";

const rootElement = document.getElementById("root");

// React Native Web
AppRegistry.registerComponent(name, () => App);
AppRegistry.runApplication(name, {
  rootTag: rootElement,
});
