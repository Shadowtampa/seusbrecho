import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppStack from "./src/routes/AppStack";
import { AppLoading} from 'expo';
import {Lobster_400Regular, useFonts} from '@expo-google-fonts/lobster';
import {Raleway_400Regular, Raleway_300Light , Raleway_600SemiBold} from '@expo-google-fonts/raleway';


export default function App() {
    let[fontsLoaded] = useFonts({
      Lobster_400Regular,
      Raleway_400Regular, 
      Raleway_300Light,
      Raleway_600SemiBold,
      
    });

    if (!fontsLoaded){
      return <AppLoading/>;
    } else{
      return (
    <>
      <AppStack/>
      <StatusBar style="auto" />
    </>
  );
}  
}

