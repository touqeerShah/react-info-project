// import { useState } from 'react'

import SectionCom from './components/Section'
import styled from 'styled-components'

const Title = styled.h1`
  color: #b19cd9;
`

function App() {

  return (
    <>
      <Title>Progress Tracker</Title>
      <div>
        <SectionCom title="M"/>
        <SectionCom title="TUS"/>
        <SectionCom title="WED"/>
        <SectionCom title="THU"/>
        <SectionCom title="FRI"/>
        <SectionCom title="SAT"/>
        <SectionCom title="SUN"/>
      </div>
    </>
  )
}

export default App
