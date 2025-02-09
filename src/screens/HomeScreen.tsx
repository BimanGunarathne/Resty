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
          <Searchbar className='bg-[#f5f5f5]' placeholder="Search for menus, restaurants and hotels" onChangeText={setSearchQuery} value={searchQuery} icon="magnify"/>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;