import React, { useContext } from 'react'
import NavBar from '../../navbar/navbar'
import "./home.scss"
import { Context } from '../../App'
import { Redirect } from 'react-router'
import { useReducer } from 'react'
import moment from 'moment'
import { motion } from 'framer-motion'

export default function Home() {
    const date=moment().format("YYYY-MM-DD");

    const mail= useContext(Context)

    const initialcount=0;

    const reducer =(state,action)=>
    {
        switch(action)
        {
            case 'INCREMENT':
                return state+1;
            case 'DECREMENT':
                return state-1;
            default :
            return state
        }

    }
    const [state,dispatch]=useReducer(reducer,initialcount)

    const Increment=()=>{
        dispatch('INCREMENT')
    }

    const Decrement=()=>{
        dispatch('DECREMENT')
    }
     
   
    return (
        <>
        <div>
            <NavBar />
        </div>
        <div className="home">
            <h1>Welcome Home  ,   {mail}</h1>
            <h1>Date:{date}</h1>
            <h1>{state}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
       
        
        </div>
       
        </>
    )
}
