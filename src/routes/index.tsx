import { NavigationContainer } from '@react-navigation/native'

// contexto
import { StackRoutes } from './stack.routes'

// caixa de contextos
export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer >
  )
}