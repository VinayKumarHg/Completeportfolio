import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
//import {faFacebook} from "@fortawesome/free-solid-svg-icons";
import { FaFacebookF } from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";

import {Link} from 'react-router-dom';

function Homepage() {
  return (
    <div className="HomePage">
      <div className="head">
      <h1 className="head-text">
          Hi i am 
          <span> VINAYKUMAR </span>
      </h1>
      <p>
      • About 1.5 years of working knowledge in E commerce using InsiteCommerce(4.2).
      • Good knowledge on Ecommerce technology.
      • Programming experience using .NET framework, MS Visual Studio .NET, ASP.NET, C#, MVC.
      • Good knowledge in Object Oriented Programming Concepts (OOP), HTML, CSS, JavaScript, jQuery.
      • Ability to write SQL statements Using MS SQL Server 2008/2012.
      • Excellent team player, with strong skills - Interpersonal, oral, written communication and good skills in troubleshooting, problem solving ability
      </p>
<div className="icons">
        <Link className="icon"><FaFacebookF/></Link> 
        <Link className="icon"><FaGithub/></Link>
       
        <Link className="icon"><FaInstagramSquare/></Link> 
        <Link className="icon"><FaLinkedin/></Link>     
</div>
      </div>
    </div>
  )
}

export default Homepage;
