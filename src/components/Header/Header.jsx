import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <section className="flexStart h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <div className="logo-wrapper">
                    <img src="./logo.png" alt="logo" width={80}/>
                </div>
                <div className="title-nav-container">
                    <div className="title-text">
                        <a>The Kaizen Project</a>
                    </div>

                    <div className="flexCenter h-menu">
                        <a href="#about">About</a>
                        <a href="#events">Events</a>
                        <a href="">Merch</a>
                        <a href="#contact-us">Contact Us</a>
                    </div>
                </div>

            </div>
        </section>
    );
};
export default Header;
