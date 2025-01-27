import { Text, View } from 'react-native'
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

interface HomeScreenProps{
    navigation?:any;
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>Home Screen</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;