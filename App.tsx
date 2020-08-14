import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Landing from './src/pages/MainPage';
import LoginPage from './src/pages/LoginPage';


export default function App() {
  return (
    <>
      <LoginPage/>
      <StatusBar style="auto" />
    </>
  );
}  

