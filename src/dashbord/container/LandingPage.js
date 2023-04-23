import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { Users } from './Users'
import { News } from './News'
import { Services } from './Services'

export const LandingPage = () => {
  return (
    <Container>
       <ul>
        <li><Link to="/">Users</Link></li>
        <li><Link to="/news">news</Link></li>
        <li><Link to="/services">services</Link></li>
      
       </ul>

       <section>
         <Routes>
            <Route path='/' element={<Users/>} />
            <Route path='/news' element={<News/>} />
            <Route path='/services' element={<Services/>} />
         </Routes>
       </section>


    </Container>
  )
}




export const Container=styled.div`


  width:100%;
  height:auto;

display:flex;
flex-direction: row;




ul{
    width:20%;

    height:87vh;
    padding:0px 8px ;
  
    -webkit-box-shadow:  0px 2px 2px 0px rgba(0,0,0,0.14);
-moz-box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.12);
box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2);

    li{
        list-style:none;

        padding:8px;
        margin-top:10px;
        background: red;
        color:white;
        
    }
}



`