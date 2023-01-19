import React, {useState} from 'react'

import './Navbar.scss';

const Navbar = () => {

    const [mobileLinksDisplayed, setMobilLinksDisplayed] = useState(false);

    const toggleNavBar = () => {
        setMobilLinksDisplayed(!mobileLinksDisplayed);
    }

    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__logo">Student App</div>
                <ul className={mobileLinksDisplayed ? 'navbar__items navbar__items-active' : 'navbar__items'}>
                    <li>Students</li>
                    <li>About </li>
                    <li>Contact</li>
                </ul>
                <div 
                    className="navbar__hamburgerMenu"
                    onClick={toggleNavBar}
                >
                =
                </div>
            </div>
            <div 
                className={mobileLinksDisplayed ? 'navbar__overlay navbar__overlay-active' : 'navbar__overlay'}
                onClick={(toggleNavBar)}
            ></div>
        </div>  
    )
}

export default Navbar