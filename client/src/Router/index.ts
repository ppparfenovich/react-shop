import React from 'react'
import Home from '../components/Home/Home'
import Login from '../components/Login/Login'

export type Route = {
  path: string
  component: React.ComponentType
  exact?: boolean
}

export enum RoutesNames {
  LOGIN = '/login',
  HOME = '/',
}

export const publicRoutes: ReadonlyArray<Route> = [
  { path: RoutesNames.HOME, exact: true, component: Home },
]

export const privateRoutes: ReadonlyArray<Route> = [
  { path: RoutesNames.LOGIN, exact: true, component: Login },
]
