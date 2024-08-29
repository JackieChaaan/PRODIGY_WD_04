import React from 'react'
import NavLinks from './NavLinks';
import './MobileNav.scss';

function MobileNav({toggleMobNav}) {
  return (
    <section className='mobile-nav-links'>
        <NavLinks toggleMobNav={toggleMobNav}/>
    </section>
  )
}

export default MobileNav
