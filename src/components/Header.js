import React, { useState } from 'react';
import './Header.scss';
import NavLinks from './NavLinks';
import logo from '../assets/images/profilePic.jpg';
import MobileNav from './MobileNav';

function Header() {

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    


    const toggleMobNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
        
    }

    return (
        <header className='header'>
            <div className="default-wrapper">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="nav-link">
                            <NavLinks />
                        </div>
                        <div className="mobile-nav">
                            {isMobileNavOpen ? (<svg onClick={toggleMobNav} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg close" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                            </svg>)
                                :
                                (<svg onClick={toggleMobNav} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list open" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                                </svg>)}

                            {isMobileNavOpen && <MobileNav toggleMobNav={toggleMobNav}/>}

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
