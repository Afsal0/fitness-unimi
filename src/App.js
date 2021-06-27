import Login from "./auth/login/login";
import Signup from "./auth/signup/signup";
import Home from "./Pages/home/home";
import Course from "./Pages/course/course";
import Contact from "./Pages/contact/contact";
import Video from "./Pages/videoconf/video";
import Logout from "./Pages/logout/logout";
import { createContext, useEffect } from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export const Context = createContext('');

function App() {
  const [user, setuser] = useState('false')
  const [mail, setmail] = useState(() => 'afsal@uni.com');
  const [pwd, setpwd] = useState('');

  const routeValidation = function () {
    const t = JSON.parse(localStorage.getItem('localvar'))
    if (t === null || t.pwd === '') {
      window.location.href = 'http://localhost:3000/login';
    }
  }

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login mail={mail} setmail={setmail} pwd={pwd} setpwd={setpwd} user={user} setuser={setuser} />
        </Route>
        <Context.Provider value={mail}>
          <Route path="/home">
            <Home routeValidation={routeValidation} />
          </Route>
          <Route path="/signup">
            <Signup />
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
            <Logout />
          </Route>

        </Context.Provider>




      </Switch>
    </Router>


  );
}

export default App;
