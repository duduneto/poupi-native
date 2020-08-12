// import packages
import { AppRegistry } from 'react-native';

// import internals
import Root from './Root';
import { name } from './appInfo';

const rootElement = document.getElementById('root');

// React Native Web
AppRegistry.registerComponent(name, () => Root);
AppRegistry.runApplication(name, {
  rootTag: rootElement,
});
