import React, { useContext } from 'react'
import NavBar from '../../navbar/navbar'
import "./video.scss"
import { Context } from '../../App'
export default function Video() {
    const mail= useContext(Context)
    return (
        <>
        <div>
            <NavBar />
        </div>
        <div className="video">
            <h1>Join the video conference for the fitness Session</h1>
               <h1>+{mail}</h1>
               
        </div>
        </>
    )
}
