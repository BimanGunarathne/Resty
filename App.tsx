import { Platform} from 'react-native';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import "./global.css";
import HomeScreen from './src/screens/HomeScreen';
import { PaperProvider } from 'react-native-paper';

const App = () => {
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      if(Platform.OS === 'android'){
        SplashScreen.hide();
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  return (
  <PaperProvider>
    <HomeScreen/>
  </PaperProvider>
  );
};

export default App;