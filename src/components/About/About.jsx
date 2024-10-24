import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './About.css';
import data from '../../utils/accordion.jsx';

const About = () => {
    return (
        <section id="about" className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* left side */}
                <div className="v-left">
                    <div className="image-container">
                        <img src={"./about.jpg"} alt="About"/>
                    </div>
                </div>

                {/* right side */}
                <div className="flexColStart v-right">
                    <span className="orangeText">About</span>
                    <span className="primaryText">The Kaizen Project</span>
                    <span className="secondaryText"> space for description if needed</span>

                    <Accordion
                        className="accordion"
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {data.map((item, i) => (
                            <AccordionItem
                                className="accordionItem"
                                key={i}
                                uuid={i}
                            >
                                <AccordionItemHeading>
                                    <AccordionItemButton className="flexCenter accordionButton">
                                        <AccordionItemState>
                                            {({ expanded }) => (
                                                <>
                                                    <div
                                                        className={`flexCenter icon ${
                                                            expanded ? 'expanded' : 'collapsed'
                                                        }`}
                                                    >
                                                        {item.icon}
                                                    </div>
                                                    <span className="primaryText">{item.heading}</span>
                                                    <div className="flexCenter icon">
                                                        <MdOutlineArrowDropDown size={20} />
                                                    </div>
                                                </>
                                            )}
                                        </AccordionItemState>
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p className="secondaryText">{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default About;
