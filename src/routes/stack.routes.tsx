import { createStackNavigator } from '@react-navigation/stack'

const { Screen, Navigator } = createStackNavigator()

import HomeScreen from '../screens/HomeScreen'
import GalleryScreen from '../screens/GalleryScreen'

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name='home'
        component={HomeScreen}
      />

      <Screen
        name='gallery'
        component={GalleryScreen}
      />
    </Navigator>
  )
}