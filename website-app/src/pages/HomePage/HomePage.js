import React from 'react'
import { useState, useEffect } from 'react'
import './HomePage.css'
import SideBar from '../../components/Sidebar/SideBar'
import NavBar from '../../components/NavBar/NavBar'
import Status from '../../components/Status/Status'
import DReport from '../../components/DReport/DReport'

function HomePage() {
  return (
    <>
        <div className='left'>
            <SideBar/>
        </div>
        <div className='content-holder'>
            <NavBar/>
            <Status/>
            <DReport/>
        </div>
    </>
  )
}

export default HomePage