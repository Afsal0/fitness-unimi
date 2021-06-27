import React ,{useState , useEffect} from 'react';
import reactDom from 'react-dom';
import './login.scss';
import { Link, Redirect } from "react-router-dom";
import Home from '../../Pages/home/home';
import { useRef } from 'react';
import { useHistory } from 'react-router';
import { useLayoutEffect } from 'react';


export default function Login({mail, setmail, pwd, setpwd,user,setuser}) {
   
   const rendercount = useRef(0)

   const history=useHistory()

   const divref = useRef()
  
   useEffect(()=>{
    (localStorage.getItem('localvar')) 
    console.log('mounted')
   },[])

   useEffect(()=>{
    (localStorage.setItem('localvar',JSON.stringify({mail,pwd})))
   },[mail,pwd])
  
    const onchangeemail=(e)=>
    {
      setmail(e.target.value)
      rendercount.current=rendercount.current+1
    }

    const onchangepwd=(e)=>
    {
      setpwd(e.target.value)
    }

    const onlink=(e)=>
    {
      e.preventDefault();
      history.push('/home')
    }
    // useLayoutEffect(()=>
    // {
    //   console.log(divref.current.getBoundingClientRect())
    // },[mail]
    // )
   
    const passwordhide=()=>{
        var pwdinput = document.getElementById('pwd');
        var pwdicon = document.getElementById('pwdicons');
      
        if (pwdinput.type == 'password')
        {
          pwdinput.type='text';
          pwdicon.className='fa fa-eye-slash';
        }
        else
        {
          pwdinput.type='password';
          pwdicon.className='fa fa-eye';
        }
      
    }


   
  return(
     <>
    <div className="login">
        <span className="logintitle">LogIn</span>
        <form className="loginform">
            <label className="email">Email Id</label>
            <input ref={divref} type="text" name="email" value={mail} placeholder="Enter Email id" onChange={onchangeemail} required></input>
            <label className="password">Password</label>
            <input type="password" name="pwd" placeholder="Enter the Password" onChange={onchangepwd} required  id="pwd"></input>
            <div className="icon">
               <i  id="pwdicons" class="fa fa-eye" aria-hidden="true" onClick={passwordhide}></i>
            </div>
            <label className="forget">Forget Password?</label>
            <Link className="signupbtn" to="/signup">
            <label >Sign Up </label>
            </Link>
           
            <button onClick={onlink} className="loginbutton">Login</button>   
         
            <p>{rendercount.current}</p>
           
        </form>
        
    </div>
   
    </>
    
  )}

























// debugger;
//       var emailinput = this.setState({email:e.target.value})
//       var pwdinput = this.setState({pwd:e.target.value})
//       if((emailinput === null || emailinput === ""))
//       { 
        
//         this.props.history.push("/login");
//       }
//       else if(pwdinput==""){
//         this.props.history.push("/login");
          
//       }
//       else{
//         this.props.history.push('/home');
//       }