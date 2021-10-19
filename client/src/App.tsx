/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import './App.css'
import Header from './components/Header/Header'
import { AppRouter } from './Router/AppRouter'
import { useActions } from './hooks/useActions'
import { User } from './types/User'

const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 1440;
`

const App: FC = () => {
  const { setUser, setIsAuth } = useActions()

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username' || '') } as User)
      setIsAuth(true)
    }
  }, [])
  return (
    <>
      <Header />
      <Container>
        <AppRouter />
      </Container>
    </>
  )
}

export default App
