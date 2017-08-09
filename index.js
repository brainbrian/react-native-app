/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
} from 'react-native';

import Routes from './app/routes';

const App = () => <Routes />;

AppRegistry.registerComponent('ReactNativeApp', () => App);
