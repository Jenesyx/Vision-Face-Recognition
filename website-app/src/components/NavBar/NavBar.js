import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <>
        <div className='nav-holder'>
            <div className='nav'>
                <div className="user">
                    <h3>User : Admin</h3>
                </div>
                <div className="welcome">
                    <h2>Welcome to your Vision</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default NavBar