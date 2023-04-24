import { NavigationContainer } from '@react-navigation/native'

// contexto
import { StackRoutes } from './stack.routes'
import { BottomTabsRoutes } from './botom-tabs.routes'
import { DrawerRoutes } from './drawer.routes'

// caixa de contextos
export function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer >
  )
}