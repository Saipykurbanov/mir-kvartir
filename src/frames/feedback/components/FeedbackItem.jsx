import React, { useRef } from 'react';

import arrow from './../images/arrow_up.svg'

const FeedbackItem = ({last}) => {

    const spoiler = useRef(null)
    const content = useRef(null)
    const arrowRef = useRef(null)
    const timer = useRef(null)
    
    const toggleSpoiler = () => {
        
        if(!last && spoiler.current.offsetHeight > 0) {
            spoiler.current.style.height = '0px'
            arrowRef.current.style.transform = 'rotate(0)'

        } else if(last && spoiler.current.offsetHeight > 76) {
            spoiler.current.style.height = '76px'
            arrowRef.current.style.transform = 'rotate(0)'
            spoiler.current.style.WebkitLineClamp = '5'
            spoiler.current.style.WebkitBoxOrient = 'vertical'

            timer.current = setTimeout(() => {
                spoiler.current.style.display = '-webkit-box'
            }, 500)
        } else {
            clearTimeout(timer)
            
            if(last) {
                spoiler.current.style.WebkitLineClamp = 'unset'
                spoiler.current.style.WebkitBoxOrient = 'unset'
                spoiler.current.style.display = 'block'
            }

            const contentH = content.current.offsetHeight
            console.log(contentH)
            spoiler.current.style.height = `${contentH}px`
            arrowRef.current.style.transform = 'rotate(180deg)'
        }
    }

    return (
        <>
            <div className="feedback_item" onClick={() => toggleSpoiler()}>
                <div className="user_icon">Н</div>

                <div className="feedback_content">
                    <div className="head">
                        <h4>
                            Наталья, риелтор, (г. Белгород.) 
                            <img src={arrow} alt="" ref={arrowRef} className="arrow" />
                        </h4>

                        <p className='comission'>Комиссия: <span>1 500 000 ₽</span></p>
                    </div>

                    <p className='desc'>Постоянные клиенты Натальи готовились к поступлению ребенка на учебу в Санкт-Петербург и искали большую семейную квартиру. Эту задачу и клиентов она и передала брокеру в «Мир квартир». Встретили их в Петербурге, обсудили задачу с клиентом, учли пожелания и начали подбор на вторичном рынке. За 2 месяца и три приездав Петербург посмотрели 7 объектов и выбрали квартиру с тремя спальнями на Крестовском острове за 125 000 000 руб.</p>
                </div>


            </div>

            <div ref={spoiler} className={`spoiler ${last ? 'last' : ''}`} onClick={() => {
                last ? toggleSpoiler() : ''
            }}>
                <p ref={content}>
                    Постоянные клиенты Натальи готовились к поступлению ребенка на учебу в Санкт-Петербург и искали большую семейную квартиру. Эту задачу и клиентов она и передала брокеру в «Мир квартир». Встретили их в Петербурге, обсудили задачу с клиентом, учли пожелания и начали подбор на вторичном рынке. За 2 месяца и три приездав Петербург посмотрели 7 объектов и выбрали квартиру с тремя спальнями на Крестовском острове за 125 000 000 руб.
                </p>
            </div>
        </>
    );
};

export default FeedbackItem;