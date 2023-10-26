import React from 'react'
import './Status.css'
import CircularProgressBar from '../ProgressBar/ProgressBar'
import ProgressBar from '../ProgressBar/ProgressBar'

function Status() {
  return (
    <>
        <div className="status-holder">
            <div className="status">
                <div className='title'>
                    <p>Status</p>
                </div>
                <div className="user-status">
                    <div className="status-number">
                        <div className="total-users">
                            <p className='h4'>Total</p><p>26</p>
                        </div>
                        <div className='present-users'>
                            <p className='h4'>Present</p><p>19</p>
                        </div>
                    </div>
                    <div className="status-circle">
                        <ProgressBar percentage={58}/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Status