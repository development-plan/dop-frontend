import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './views/Main';

const Nav = createStackNavigator(
    {
        Home: { screen: Main }
    },
    {
        initialRouteName: 'Home'
    }
);

export default createAppContainer(Nav);
