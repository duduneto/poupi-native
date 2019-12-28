// import packages
import { AppRegistry } from "react-native";
// import internals
import Root from "./src/Root";
import { name } from "./appInfo.json";

AppRegistry.registerComponent(name, () => Root);
