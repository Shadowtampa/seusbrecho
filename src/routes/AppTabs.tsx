import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainPage from '../pages/MainPage';
import MarkedsPage from '../pages/MarkedsPage';
import ProfilePage from '../pages/ProfilePage';
import SearchPage from '../pages/SearchPage';
import Icon from 'react-native-vector-icons/Feather';

const {Navigator, Screen} = createBottomTabNavigator();

function AppTabs(){
    return (
        <Navigator
            // {/* <Screen name="MainPage" component={MainPage} />
            // <Screen name="SearchPage" component={SearchPage} />
            // <Screen name="MarkedsPage" component={MarkedsPage} />
            // <Screen name="ProfilePage" component={ProfilePage} />
            //  */}
       tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: "#fafafc",
        activeBackgroundColor: "#ebebf5",
        inactiveTintColor: "#c1bccc",
        activeTintColor: "#32264d",
      }}
    >
      <Screen
        name="MainPage"
        component={MainPage}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size , focused}) => {
            return <Icon name="home" size={size} color={focused ? '#DDA0DD' : color} />
          },
        }}
      />

      <Screen 
      name="SearchPage" 
      component={SearchPage}
      options={{
        tabBarLabel: "",
        tabBarIcon: ({color, size, focused}) => {
          return (
          <Icon name="search" size={size} color={focused ? '#DDA0DD' : color}  />
          );
        },
      }} 
      />
      <Screen 
      name="MarkedsPage" 
      component={MarkedsPage}
      options={{
        tabBarLabel: "",
        tabBarIcon: ({color, size, focused}) => {
          return (
          <Icon name="bookmark" size={size} color={focused ? '#DDA0DD' : color}  />
          );
        },
      }} 
      />
      <Screen 
      name="ProfilePage" 
      component={ProfilePage}
      options={{
        tabBarLabel: "",
        tabBarIcon: ({color, size, focused}) => {
          return (
          <Icon name="user" size={size} color={focused ? '#DDA0DD' : color}  />
          );
        },
      }} 
      />
        </Navigator>
    );
}
export default AppTabs;