import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css";
import './Testimonials.css';
import data from '../../utils/slider.json';
import { sliderSettings } from "../../utils/common.js";

const Testimonials = () => {
    const [hasPrev, setHasPrev] = useState(false);
    const [hasNext, setHasNext] = useState(false);

    useEffect(() => {
        // Update button states based on the number of slides
        setHasPrev(false); // Initially no previous slide
        setHasNext(data.length > 1); // Enable next if there's more than one slide
    }, [data.length]);

    return (
        <section className="swiper-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className="orangeText">Testimonials</span>
                    <span className="primaryText">Hear from Our Members</span>
                </div>

                <Swiper
                    {...sliderSettings}
                    onSlideChange={(swiper) => {
                        console.log('Active index:', swiper.activeIndex);
                        console.log('Total slides:', data.length);

                        // Check if there's a previous or next slide
                        setHasPrev(swiper.activeIndex > 0);
                        setHasNext(swiper.activeIndex < data.length - 4);
                    }}
                >
                    <SliderButtons hasPrev={hasPrev} hasNext={hasNext} />
                    {data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">
                                <span className="primaryText">{card.name}</span>
                                <span className="secondaryText">{card.description}</span>
                                <span className="secondaryText">{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Testimonials;

const SliderButtons = ({ hasPrev, hasNext }) => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button
                className={!hasPrev ? 'greyed-out' : ''}
                disabled={!hasPrev}
                onClick={() => { if (hasPrev) swiper.slidePrev(); }}
            >
                &lt;
            </button>
            <button
                className={!hasNext ? 'greyed-out' : ''}
                disabled={!hasNext}
                onClick={() => { if (hasNext) swiper.slideNext(); }}
            >
                &gt;
            </button>
        </div>
    );
}
