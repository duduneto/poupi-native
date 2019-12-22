// import packages
import { AppRegistry } from "react-native";
// import internals
import Root from "./Root";
import { name } from "./appInfo.json";

AppRegistry.registerComponent(name, () => Root);
AppRegistry.runApplication(name, {
  rootTag: document.getElementById("root")
});
