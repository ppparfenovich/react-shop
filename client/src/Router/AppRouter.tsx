/* eslint-disable react/react-in-jsx-scope */
import { ReactElement } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { privateRoutes, publicRoutes, RoutesNames } from '.'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const AppRouter = (): ReactElement => {
  const { isAuth } = useTypedSelector((state) => state.auth)

  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />
      ))}
      <Redirect to={RoutesNames.HOME} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />
      ))}
      <Redirect to={RoutesNames.LOGIN} />
    </Switch>
  )
}
