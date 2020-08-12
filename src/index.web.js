// ----------- import Packs
import { AppRegistry } from 'react-native';

// ----------- import Internals
import Root from './Root';
import { name } from './appInfo';

const rootElement = document.getElementById('root');

// ----------- set React Native Web
AppRegistry.registerComponent(name, () => Root);
AppRegistry.runApplication(name, {
  rootTag: rootElement,
});
