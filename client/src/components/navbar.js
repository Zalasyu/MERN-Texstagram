import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const NavBar = () => {
  return(

  <nav>
    <div className="nav-wrapper white" >
      <Link to="/" className="brand-logo left">Texstagram</Link>

      <ul id="nav-mobile" className="right">
        <li><Link to="/home"><img src="https://img.icons8.com/ios/50/000000/home--v2.png"/></Link></li>
        <li><Link to="/create"><img src="https://img.icons8.com/ios/50/000000/plus--v2.png"/></Link></li>
        <li><Link to="/profile/"><img src="https://img.icons8.com/ios/50/user-male-circle.png"/></Link></li>
        <li><Link to="/login"><img src="https://img.icons8.com/ios/50/login-rounded-right--v1.png" alt="" /></Link></li>
        <li><Link to="/signup"><img src="https://img.icons8.com/ios/50/add-user-male.png" alt="" /></Link></li>
        <li><Link to="/deactivate"><img src="https://img.icons8.com/ios/50/remove-user-male.png" alt="" /></Link></li>
      </ul>
    </div>
  </nav>


  )

}
export default NavBar;
