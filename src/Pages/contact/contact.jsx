import React from 'react'
import NavBar from '../../navbar/navbar'
import "./contact.scss"
import { useState } from 'react'
import { useEffect } from 'react'

export default function Contact() {
    const[person,setperson]=useState(null)
    const[loading,setloading]=useState(true)

    useEffect(async()=>{
        const response=await fetch("https://api.randomuser.me/")
        const data=await response.json() 
        const [item]=data.results;
        setperson(item)
        setloading(false)
    },[])
    return (
        <>
        <div>
            <NavBar />
        </div>
        <div>{loading?<div>loading....</div>:<div>{person.name.first}</div>}</div>
        <div className="contact">
            <h1>Welcome Here We are to help You at 24/7</h1>
                <li>Phn No: 9688350370</li>
                <li>Email Id: afsal@unimity.com</li>
               
        </div>
        </>
    )
}
