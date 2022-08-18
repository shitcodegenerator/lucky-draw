import React from 'react'
import './App.css'
import styled from 'styled-components'
import MainContent from './components/MainContent/MainContent'

const AppWrapper = styled.div`
  height: 100vh;
  opacity: 0.7;
  background-image: linear-gradient(#d7e5f7 0.9px, transparent 0.9px),
    linear-gradient(to right, #d7e5f7 0.9px, #eef4ff 0.9px);
  background-size: 18px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <AppWrapper className="App">
      <MainContent />
    </AppWrapper>
  )
}

export default App
