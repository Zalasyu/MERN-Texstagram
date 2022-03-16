import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const NavBar = () => {
  return(

  <nav>
    <div className="nav-wrapper white" >
      <Link to="/" className="brand-logo left">Texstagram</Link>
      <ul id="nav-mobile" className="right">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/profile/">Your Profile</Link></li>
      </ul>
    </div>
  </nav>


  )

}
export default NavBar;
