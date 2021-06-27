import React from 'react'
import { Redirect } from 'react-router';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
export default function Logout() {
    const history=useHistory();
    useEffect(()=>{
        localStorage.removeItem('localvar')
    },[])
    const login=()=>{
       history.push('login')
    }
    return (
        <div>
           <button onClick={login}>Login Again</button>
        </div>
    )
}
