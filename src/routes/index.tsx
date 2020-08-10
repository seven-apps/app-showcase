import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { authRoutes, unAuthRoutes, IRoute } from './routes'
import AuthLoading from '@screens/authLoading'
import { useAuth } from '@services/store'
import { getItem } from '@services/asyncStorage'
import { USER_KEY } from '@constants/asyncStorage'

const Stack = createStackNavigator()

const RoutesAuth = () => (
  <Stack.Navigator initialRouteName={authRoutes[0].name} headerMode="none">
    {authRoutes.map((item: IRoute, index: number) => (
      <Stack.Screen
        key={`auth_${index}`}
        name={item.name}
        component={item.component}
      />
    ))}
  </Stack.Navigator>
)

const RoutesUnAuth = () => (
  <Stack.Navigator initialRouteName={unAuthRoutes[0].name} headerMode="none">
    {unAuthRoutes.map((item: IRoute, index: number) => (
      <Stack.Screen
        key={`unAuth_${index}`}
        name={item.name}
        component={item.component}
      />
    ))}
  </Stack.Navigator>
)

const Navigation = () => {
  const [loading, setLoading] = React.useState<Boolean>(true)
  const { user, setUser } = useAuth()

  React.useEffect(() => {
    const loadUser = async () => {
      const user = await getItem(USER_KEY)
      setUser(user)
      setLoading(false)
    }
    if (!user) {
      loadUser()
      return
    }

    setLoading(false)
  }, [user])

  if (loading) return <AuthLoading />

  return (
    <NavigationContainer>
      {!!user ? <RoutesAuth /> : <RoutesUnAuth />}
    </NavigationContainer>
  )
}

export default Navigation
