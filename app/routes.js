import React from 'react';
import { TabNavigator } from 'react-navigation';
import AddCity from './tabs/AddCity/AddCity';
import CitiesTab from './tabs/Cities/CitiesTab';

const RouteConfig = {
  Cities: { screen: CitiesTab },
  AddCity: { screen: AddCity },
}

export default Routes = TabNavigator(RouteConfig, {
  tabBarPosition: 'bottom',
});
