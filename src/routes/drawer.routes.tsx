import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen'
import GalleryScreen from '../screens/GalleryScreen'

const { Navigator, Screen } = createDrawerNavigator()

export function DrawerRoutes() {
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