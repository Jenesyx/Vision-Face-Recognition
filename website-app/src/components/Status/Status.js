import React from 'react'

function Status() {
  return (
    <>
        <div className="status-holder">
            <div className='title'>
                <p>Status</p>
            </div>
            <div className="user-status">
                <div className="status-number">
                    <div className="total-users">
                        <p>Total</p><p>26</p>
                    </div>
                    <div className='present-users'>
                        <p>Present</p><p>19</p>
                    </div>
                </div>
                <div className="status-circle">
                    <div className="total-circle"></div>
                    <div className='fill'></div>
                    <p>58%</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Status