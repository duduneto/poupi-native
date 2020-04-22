import {AppRegistry} from 'react-native';
import Root from './src/Root';
import {name} from './src/appInfo.json';

AppRegistry.registerComponent(name, () => Root);
