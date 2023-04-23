import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function GalleryScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
      <Text>Home Works!!</Text>
      <StatusBar style='auto' />
    </View>
  )
}