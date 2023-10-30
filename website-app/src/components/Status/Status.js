import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import './Status.css'
import ProgressBar from '../ProgressBar/ProgressBar'

function Status() {
    const [dataCount, setDataCount] = useState([])
    const [dataMain, setDataMain] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/api/count')
            .then((response) => {
                setDataCount(response.data);
                console.log('Data for "count":', response.data);
            })
            .catch((error) => {
                console.error('Error fetching "count" data:', error);
            });
        axios.get('http://localhost:4000/api/main')
            .then((response) => {
                setDataMain(response.data);
                console.log('Data for "main":', response.data);
            })
            .catch((error) => { 
                console.error('Error fetching "main" data:', error);
            });
    }, []);

    const i = 0
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