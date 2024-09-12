import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import one from './../images/1.webp'
import two from './../images/2.webp'
import three from './../images/2.webp'

import arrow_next from './../images/arrow_next.svg'
import arrow_prev from './../images/arrow_prev.svg'

const SLider = () => {

    const swiperContainer = useRef(null)
    const prevArrow = useRef(null)
    const nextArrow = useRef(null)

    const hoverOnSlider = (e) => {
        if(window.innerWidth < 992) {
            return
        }
        const width = swiperContainer.current.offsetWidth
        const position = e.clientX

        if(position < width / 2) {
            nextArrow.current.style.transform = 'translate(100%, -50%)'
            nextArrow.current.style.opacity = '0'

            prevArrow.current.style.transform = 'translate(0, -50%)'
            prevArrow.current.style.opacity = '1'
        } else {
            prevArrow.current.style.transform = 'translate(-100%, -50%)'
            prevArrow.current.style.opacity = '0'

            nextArrow.current.style.transform = 'translate(0, -50%)'
            nextArrow.current.style.opacity = '1'
        }
    }

    const leaveSlider = () => {
        if(window.innerWidth < 992) {
            return
        }
        prevArrow.current.style.transform = 'translate(-100%, -50%)'
        prevArrow.current.style.opacity = '0'
        
        nextArrow.current.style.transform = 'translate(100%, -50%)'
        nextArrow.current.style.opacity = '0'
    }

    return (
        <div className='slider_container' onMouseMove={(e) => hoverOnSlider(e)} onMouseLeave={(e) => leaveSlider(e)}>
            <Swiper
            allowTouchMove={true}
                ref={swiperContainer}
                loop={true}
                rewind={true}
                spaceBetween={0}
                navigation={{
                    nextEl: '.nav_buttons.next',
                    prevEl: '.nav_buttons.prev'
                }}
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                breakpoints={{
                    992: {
                        allowTouchMove: false
                    }
                }}
            >
                <SwiperSlide><img src={one} alt="" /></SwiperSlide>
                <SwiperSlide><img src={two} alt="" /></SwiperSlide>
                <SwiperSlide><img src={three} alt="" /></SwiperSlide>

            </Swiper>

            <img src={arrow_next} ref={nextArrow} alt="" className="nav_buttons next" />
            <img src={arrow_prev} ref={prevArrow} alt="" className="nav_buttons prev" />
        </div>
    );
};

export default SLider;