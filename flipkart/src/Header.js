import React from 'react'
import './Header.css'
import Nav from './component/Nav'
import Item from './component/Item'
import Ads from './component/Ads'
export default function Header() {
  return (
    <div>
        <Nav/>
        <Item/>
        <Ads/>
    </div>
  )
}
