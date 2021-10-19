import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
import { RoutesNames } from '../../Router'

export default function Header(): ReactElement {
  return (
    <>
      <Link to={RoutesNames.HOME}>Home</Link>
      <Link to={RoutesNames.LOGIN}>Login</Link>
    </>
  )
}
