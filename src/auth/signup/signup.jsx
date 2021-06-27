import React from 'react'
import "../../auth/signup/signup.scss"
import { Link } from "react-router-dom";
export default function Signup() {
    const handlesumbmit=(e)=>
    {
     e.preventDefault();
    }
    return (
        <div>
        <div  className="signin">
        <span className="signintitle">SignUp</span>
        <form className="signinform">
            < label className="email">UserName</label>
            < input type="text" name="email" placeholder="Enter UserName"   required></input>
            < label className="email">Email Id</label>
            < input type="text" name="email" placeholder="Enter Email id" required></input>
            < label className="password">OTP</label>
            < input type="text" name="email" placeholder="Enter OTP"  required></input>
            < label className="password">Password</label>
            < input type="password" name="pwd" placeholder="Enter the Password" required  id="pwd"></input>
            < label className="password">Confirm Password</label>
            < input type="password" name="pwd" placeholder="Renter the Password" required  id="pwd"></input>
            < Link  to="/login">
            < button type="submit" className="regbutton"onChange={handlesumbmit}>Register</button>
            </Link> 
        </form>
        </div>
        </div>
    )
}
