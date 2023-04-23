import { View, Text, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function HomeScreen({ navigation }: any) {

  function navToGallery() {
    navigation.navigate('gallery')
  }


  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Text>Home Works!!</Text>
      <Button
        title='Go To Gallery'
        onPress={navToGallery}
      />
      <StatusBar style='auto' />
    </View>
  )
}