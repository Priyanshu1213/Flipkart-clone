
import React from 'react'
import './App.css'
import Nav from './component/Nav'
import Item from './component/Item'
import Ads from './component/Ads'
import Login from './component/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import First from "./First"
export default function App() {
  return (
    
    <>
    {/* <BrowserRouter> */}
    {/* <Nav/>
    <Item/>
     <Ads/> */}
     <Nav/>
    <Routes>
     <Route path="/" element={<First/>}/>

        <Route path="/login" element={<Login/>}/>

        

    </Routes>
    
    {/* </BrowserRouter> */}
    
    </>
    
    
    
    
    
  )

}



