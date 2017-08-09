import React from 'react';
import {StackNavigator } from 'react-navigation';

import Cities from './Cities';
import City from './City';

const RouteConfig = {
  Cities: {
    screen: Cities,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#9c27b0',
      }
    }
  },
  City: {
    screen: City,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#9c27b0',
      }
    },
  },
}

export default StackNavigator(RouteConfig);
