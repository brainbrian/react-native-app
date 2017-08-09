import React from 'react';
import {StackNavigator } from 'react-navigation';

import Cities from './Cities';

const RouteConfig = {
  Cities: { screen: Cities },
}

export default StackNavigator(RouteConfig);
