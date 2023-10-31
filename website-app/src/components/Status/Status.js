import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import './Status.css'
import ProgressBar from '../ProgressBar/ProgressBar'

function Status(props) {
    const { dataMain, dataCount } = props;
    

    let i = 0
    let mainpercentage = 0
    
    dataMain.map((item) => {
        if(item.Gangzeit == '00:00:00' && item.Ankunftszeit != '00:00:00'){
            i+=1
        }
    })

    dataCount.map((item) => {
        mainpercentage = (i / item.Schueler) * 100
    })

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
                                <p className='h4'>Total</p>
                                {dataCount.map((item) => (
                                <p>{item.Schueler}</p>
                                ))}
                            </div>                                                                                                          
                            <div className='present-users'>
                                <p className='h4'>Present</p><p>{i}</p>
                            </div>
                        </div>
                        <div className="status-circle">
                                <ProgressBar percentage={mainpercentage.toFixed(1)}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Status