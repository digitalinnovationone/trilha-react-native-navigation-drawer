import { NavigationContainer } from '@react-navigation/native'

// contexto
import { StackRoutes } from './stack.routes'
import { BottomTabsRoutes } from './botom-tabs.routes'

// caixa de contextos
export function Routes() {
  return (
    <NavigationContainer>
      <BottomTabsRoutes />
    </NavigationContainer >
  )
}