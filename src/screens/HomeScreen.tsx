import { View } from 'react-native'
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';

interface HomeScreenProps{
    navigation?:any;
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View className="p-5">
          <Searchbar icon="magnifying-glass" className="bg-[#f5f5f5] rounded-full" placeholder="Search for menus, restaurants and hotels" onChangeText={setSearchQuery} value={searchQuery}/>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;