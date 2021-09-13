/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';

import {name as appName} from './app.json';

import './src/config/Assets';
import './src/config/Color';
import './src/config/Spacing';
import './src/config/Typo';

AppRegistry.registerComponent(appName, () => App);
