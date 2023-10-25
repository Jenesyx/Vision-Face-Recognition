import React from 'react'
import { useState, useEffect } from 'react'
import './HomePage.css'
import SideBar from '../../components/Sidebar/SideBar'
import NavBar from '../../components/NavBar/NavBar'

function HomePage() {
  return (
    <>
        <div className='left'>
            <SideBar/>
        </div>
        <div className='content-holder'>
            <NavBar/>
        </div>
    </>
  )
}

export default HomePage