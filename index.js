/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import coursera from './src/coursera';
//import foodhub from './src/foodhub';
//import pizzaHut from './src/pizzaHut';

AppRegistry.registerComponent(appName, () => coursera);
