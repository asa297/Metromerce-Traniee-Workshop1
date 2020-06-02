import React from 'react'
import { Button } from 'antd'
import styled from 'styled-components'
import './App.css'

function App() {
  return (
    <div className="App">
      Traniee Workshop 1 <Button type="primary">Primary Button</Button>
      <TestComponent>test</TestComponent>
    </div>
  )
}

export default App

const TestComponent = styled.div`
  background: red;
`
