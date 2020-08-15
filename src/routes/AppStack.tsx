import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from '../pages/LoginPage';
import AppTabs from './AppTabs';
import ItemDescription from '../pages/ItemDescription'

const { Navigator, Screen} = createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer>
                <Navigator screenOptions={{ headerShown: false}}>
                    <Screen name="Login"  component={LoginPage}/>
                    <Screen name="ItemDescription"  component={ItemDescription}/>
                    <Screen name="AppTabs"  component={AppTabs}/>

                </Navigator>
        </NavigationContainer>
    );

}
export default AppStack;