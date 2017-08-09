import React from 'react';
import {StackNavigator } from 'react-navigation';

import AddCity from './AddCity';

const RouteConfig = {
  AddCity: {
    screen: AddCity,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#9c27b0',
      }
    }
  },
}

export default StackNavigator(RouteConfig);
