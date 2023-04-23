import React from 'react'
import Navbar from './container/Navbar'
import styled from 'styled-components'
import { LandingPage } from './container/LandingPage'
export default function Dasbord() {
  return (
    <Container>
      <Navbar/>
      <LandingPage/>

    </Container>
  )
}


export const  Container=styled.div`



`