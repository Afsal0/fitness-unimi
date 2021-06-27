import Login from "./auth/login/login";
import Signup from "./auth/signup/signup";
import Home from "./Pages/home/home";
import Course from "./Pages/course/course";
import Contact from "./Pages/contact/contact";
import Video from "./Pages/videoconf/video";
import Logout from "./Pages/logout/logout";
import { createContext,useEffect } from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

export const Context = createContext('');

function App() {
  const [user,setuser]=useState('false')
  const history = useHistory();
  const [mail,setmail]=useState(()=> 'afsal@uni.com');
  
 
  const [pwd,setpwd]=useState('');

  // const routeValidation = function () {
  //   const t = localStorage.getItem('localvar');
  //   debugger
  //    console.log(t)
  //   if (t === null) {
  //     console.log("fuck")
  //     history.push('/login');
  //   }
  // }


  let t;
  useEffect(()=>{
    t = localStorage.getItem('localvar');
  },[])
  
  
  


  return (
    <Router>
    <Switch>
      <Route path="/login">
         <Login  mail={mail} setmail={setmail} pwd={pwd} setpwd={setpwd} user={user} setuser={setuser}/>
      </Route>
      <Context.Provider value={mail}>
      <Route  path="/home">
        {t ? <Home />:<Login />}
      </Route>
      <Route path="/signup">
       <Signup/>
      </Route>
      <Route path="/course">
          <Course />
      </Route>
      <Route path="/contact">
      <Contact />
      </Route>
      <Route path="/video">
       <Video />
      </Route>
      <Route path="/logout">
        <Logout/>
      </Route>

      </Context.Provider>
     
     

      
    </Switch>
    </Router>
  
   
  );
}

export default App;
