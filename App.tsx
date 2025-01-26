import { Platform, SafeAreaView, Text} from 'react-native';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import "./global.css";

const App = () => {
  useEffect(()=>{
    if(Platform.OS === 'android'){
      SplashScreen.hide();
    }
  }, []);
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default App;