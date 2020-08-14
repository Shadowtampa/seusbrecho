import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainPage from '../pages/MainPage';
import MarkedsPage from '../pages/MarkedsPage';
import ProfilePage from '../pages/ProfilePage';
import SearchPage from '../pages/SearchPage';

import { NavigationContainer } from '@react-navigation/native';

const {Navigator, Screen} = createBottomTabNavigator();

function AppTabs(){
    return (
        <Navigator>
            <Screen name="MainPage" component={MainPage} />
            <Screen name="MarkedsPage" component={MarkedsPage} />
            <Screen name="ProfilePage" component={ProfilePage} />
            <Screen name="SearchPage" component={SearchPage} />

        </Navigator>
    );
}
export default AppTabs;