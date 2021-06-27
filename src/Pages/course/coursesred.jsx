import React from 'react'
import { actions } from './course'
export default function Coursesred({cours,dispatch}) {
    debugger;
    return (
        <div>
            <span >
                {cours.name}
            </span>
            
            <button onClick={()=>dispatch({type:actions.DELETE_COURSE,payload:{id:cours.id}})}>Delete</button>
        </div>
    )
}
