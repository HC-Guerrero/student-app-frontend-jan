import React from 'react'

import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar__container">
            <div className="navbar__logo">Student App</div>
            <ul className="navbar__items">
                <li>Students</li>
                <li>About </li>
                <li>Contact</li>
            </ul>
            <div className="navbar__hamburgerMenu">
            =
            </div>
        </div>
        <div className="navbar__overlay"></div>
    </div>  
    )
}

export default Navbar