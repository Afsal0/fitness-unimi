import React from 'react'
import NavBar from '../../navbar/navbar'
import "./course.scss"


export default function Course() {
   
   
    return (
        <>
        <div>
            <NavBar />
        </div>
        <div className="course">
            <h1>Welcome Courses</h1>
            
                <li>Weight Loss</li>
                <li>Weight Gain</li>
                <li>Lean Fit</li>
                <li>Bulk Fit</li>
                
            
        </div>
        </>
    )
}
