import React, { useEffect, useRef, useState } from 'react';

import './css/feedback.css';
import YandexButton from '../../components/yandex_button/YandexButton';
import FeedbackItem from './components/FeedbackItem';
import Store from '../../utils/Store';

const FeedBack = ({mode, blocked, page, mainScroll}) => {

    const feedbackContainer = useRef(null)
    const feedbackList = useRef(null)
    const [scroll, setScroll] = useState(0)
    const timer = useRef(null)
    const isBlocked = useRef(false)

    const onElement = (e) => {
        if(page === 7) {
            Store.setListener('block_scroll', true)
        } 
    }

    const elementOut = () => {
        Store.setListener('block_scroll', false)
    }

    const scrollFeedBack = (e) => {
        if(page === 7 && mainScroll === 600) {
            let wheel
              
            if(e.deltaY === 0) {
                wheel = e.deltaX > 0 ? Math.min(e.deltaX, 50) : Math.max(e.deltaX, -50); 
            } else {
                wheel = e.deltaY > 0 ? Math.min(e.deltaY, 50) : Math.max(e.deltaY, -50);
            }
    
            wheel *= 0.5
    
            if(wheel > 0) {
                const stop = feedbackList.current.offsetHeight - feedbackContainer.current.offsetHeight
                setScroll(prev => {
                    if(prev >= stop) {
                        isBlocked.current = false
                        timer.current = setTimeout(() => {
                            !isBlocked.current && Store.setListener('block_scroll', false)
                        }, 600)

                        return prev
                    } else {
                        isBlocked.current = true
                        return prev + wheel
                    }
                })
            } else {
                setScroll(prev => {
                    if (prev <= 0) {
                        isBlocked.current = false
                        timer.current = setTimeout(() => {
                            !isBlocked.current && Store.setListener('block_scroll', false)
                        }, 600)

                        return 0
                    } else {
                        isBlocked.current = true
                        return prev + wheel
                    }
                })
            }
        }
    }

    useEffect(() => {
        return () => {
            if(timer.current) {
                clearTimeout(timer.current)
            }
        }
    } ,[])

    return (
        <div className={`${mode}`} id='feedback' onWheel={(e) => scrollFeedBack(e)}>
            <div 
                className="container" 
                ref={feedbackContainer} 
                // onMouseOver={(e) => onElement(e)}
                // onMouseOut={() => elementOut()}
            >
                <div className="feedback__list" style={{transform: `translateY(-${scroll}px)`}} ref={feedbackList}>
                    <FeedbackItem />
                    <FeedbackItem />
                    <FeedbackItem />
                    <FeedbackItem />
                    <FeedbackItem />
                    <FeedbackItem last={true}/>
                </div>
            </div>

            <div className="bottom">
                {/* <BottomHeader title={'Кейсы'}/> */}
                <a href="/transfer" className="main_button big">Передать Клиента</a>
                <h2>Кейсы</h2>
                
                <YandexButton />
            </div>

        </div>
    );
};

export default FeedBack;