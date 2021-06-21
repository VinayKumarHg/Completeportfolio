import React from 'react';
import avatar from '../img/avatar.JPG';
import {NavLink} from 'react-router-dom';
function NavBar() {
  return (
    <div className="NavBar">
      
      <nav className="nav">
      <div className="Profile">
          <img className="navimg" src={avatar} alt="Avatar"></img>
      </div>
        <ul className="nav-items">
                <li className="nav-item">
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/About" exact activeClassName="active">About</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/Portfolio" exact activeClassName="active">Portfolio</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/Contact" exact activeClassName="active">Contact</NavLink>
                </li>
               
                
            
        </ul>
        <footer className="footer">
            <p> 
                @2021 Vinay
            </p>
      </footer>
      </nav>
     
    </div>
  )
}

export default NavBar
