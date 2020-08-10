import { Login } from '@screens/unAuthenticated'
import { Home } from '@screens/authenticated'

export interface IRoute {
  name: string
  component: any
}

export const authRoutes = [
  {
    name: 'home',
    component: Home,
  },
]

export const unAuthRoutes = [
  {
    name: 'login',
    component: Login,
  },
]
