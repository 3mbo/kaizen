import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/* left side */}
                <div className="flexStart f-left">
                    <img src="./logo.png" alt="logo" width={60}/>
                    <span> The Kaizen Project</span>

                    <span className="secondaryText">
                        description <br />
                        more desc
                    </span>
                </div>
                {/* right side */}
                <div className="flexColStart f-right">
                    <span className="primaryText">Information?</span>
                    <span className="secondaryText">information?</span>

                    <div className="flexCenter f-menu">
                        <span>About Us</span>
                        <span>Schedule</span>
                        <span>Merch</span>
                        <span>Get Started</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer
