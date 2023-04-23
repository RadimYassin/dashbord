import React from 'react'
import styled from 'styled-components'

export default function Navbar() {
  return (
    <Nav>
       <ul>
        <li>logo</li>
        <li>profile</li>
       </ul>

    </Nav>
  )
}



export const Nav=styled.div`



padding:8px;

ul{
    background-color:whitesmoke;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding:10px;
}
li{
  list-style:none;
}

`