import React from 'react'
import SocialLinks from './SocialLinks';
import './Footer.scss'

function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="wrapper">
                    <section className='footer-social-links'>
                        <SocialLinks />
                    </section>
                    <p>© 2024 Abel C Varghese. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
