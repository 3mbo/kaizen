import React from 'react';
import './Contact.css';
import { MdCall, MdEmail, MdLocationOn } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';

const Contact = () => {
    return (
        <section id="contact-us" className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">

                {/* Right Side - Image */}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./dojo.jpg" alt="dojo" />
                    </div>
                </div>

                {/* Left Side - Contact Information */}
                <div className="flexColStart c-left">
                    <span className="orangeText">Contact Us</span>
                    <span className="primaryText">Contact Information</span>
                    <span className="secondaryText">Additional information herrreeeeeee</span>

                    <div className="flexColStart contactModes">
                        {/* First Row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Call</span>
                                        <span className="secondaryText">902 902 9022</span>
                                    </div>
                                </div>
                                <div className="flexColCenter button">Call Now</div>
                            </div>
                            {/* Second Mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Text</span>
                                        <span className="secondaryText">902 902 9022</span>
                                    </div>
                                </div>
                                <div className="flexColCenter button">Message</div>
                            </div>
                        </div>
                        {/* Second Row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdEmail size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Email</span>
                                        <span className="secondaryText">email@gmail.com</span>
                                    </div>
                                </div>
                                <div className="flexColCenter button">Send Email</div>
                            </div>
                            {/* Fourth Mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdLocationOn size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Address</span>
                                        <span className="secondaryText">100 Main St</span>
                                    </div>
                                </div>
                                <div className="flexColCenter button">Get Directions</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
