import "../navbar/navbar.scss"
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
export default function NavBar() {

    return (                                               
        <>
        <div className="topbar">
          <div className="topcenter">
              <div className="toplist">
               <li><div className="toplistitem"><Link className="link" to="/home">Home</Link></div></li>
               <li><div className="toplistitem"><Link className="link" to="/course">Courses</Link></div></li>
               <li><div className="toplistitem"><Link className="link" to="/contact">Contact</Link></div></li>
               <li><div className="toplistitem"><Link className="link" to="/video">Video Conf</Link></div></li>
               <li><div className="toplistitem"><Link className="link" to="/logout" >LogOut</Link></div></li>
              </div>   
          </div>
        </div>
        </>    
    )
}