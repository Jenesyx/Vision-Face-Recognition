import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import chevronRight from '../../images/chevron-right.png'
import chevronLeft from '../../images/chevron-left.png'
import './DReport.css'

function DReport() {

    const [dataMain, setDataMain] = useState([])
    const [dataSchueler, setDataSchueler] = useState([]);
    const [dataAnwesen, setDataAnwesen] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/main')
            .then((response) => {
                setDataMain(response.data);
                console.log('Data for "main":', response.data);
            })
            .catch((error) => { 
                console.error('Error fetching "main" data:', error);
            });

        axios.get('http://localhost:4000/api/schueler')
            .then((response) => {
                setDataSchueler(response.data);
                console.log('Data for "schueler":', response.data);
            })
            .catch((error) => {
                console.error('Error fetching "schueler" data:', error);
            });
        axios.get('http://localhost:4000/api/anwesenheit')
        .then((response) => {
            setDataAnwesen(response.data);
            console.log('Data for "anwesen":', response.data);
        })
        .catch((error) => {
            console.error('Error fetching "anwesen" data:', error);
        });
    }, []);
    const count = 0
    dataMain.map((item) => {
        if(item.Ankunftszeit == '00:00:00'){
            item.Ankunftszeit = ''
        }
    })

    return (
        <>
            <div className="daily-holder">
                <div className="daily">
                    <div className="title">
                        <p>Daily Report</p>
                    </div>
                    <div className='date'>
                        <div className='chevron'>
                            <img src={chevronLeft} alt="left" />
                        </div>
                        <p>23.10.2023</p>
                        <div className='chevron'>
                            <img src={chevronRight} alt="right" />
                        </div>
                    </div>
                    <div className="user-titles">
                        <ul>
                            <li>Username</li>
                            <li>Begin at</li>
                            <li>Finish at</li>
                        </ul>
                    </div>
                    <div className="users-daily">
                        {dataMain.map((item) => (
                        <ul>
                            <li>{item.Vorname} {item.Nachname}</li>
                            <li>{item.Ankunftszeit}</li>
                            <li>{item.Gangzeit}</li>
                        </ul>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DReport