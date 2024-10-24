import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from "react-icons/hi";
import CountUp from "react-countup";
export const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">

                {/* left side */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <h1>Karate that<br/>
                            Honors <br/>
                            You
                        </h1>
                    </div>

                    <div className="flexColStart hero-des secondaryText">
                        <span>All abilities, all welcome.</span>
                        <span>Join as you are, and train at your own pace.</span>
                    </div>

                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <span>Individual<br/>
                                    Training
                                </span>
                            </span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <span>Group <br/>
                                    Sessions
                                </span>
                            </span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <span>Local <br/>
                                    Events
                                </span>
                            </span>
                        </div>
                    </div>

                </div>
                {/* right side*/}
                <div className="flexCenter hero-right">
                    <div className="hero-image-container">
                        <img src="./hero.png" alt="hero image"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero