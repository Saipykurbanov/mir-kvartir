import React, { useEffect } from 'react';

import './css/feedback.css';
import YandexButton from '../../components/yandex_button/YandexButton';
import FeedbackItem from './components/FeedbackItem';
import useScrollFeedBack from './hooks/useScrollFeedBack';
import Store from '../../utils/Store';

const FeedBack = ({mode}) => {

    const onFeedBack = () => {
        Store.setListener('block_scroll', true)
    }

    const leaveFeedBack = () => {
        Store.setListener('block_scroll', false)
    }

    const stopDefault = (e) => {
        if(Math.abs(e.deltaX) > 0) {
            e.preventDefault()
        }
        
        return
    }

    const screenWidth = window.innerWidth;

    useEffect(() => {
        if(window.innerWidth > 991) {
            window.addEventListener('wheel', stopDefault, {passive: false})
        }

        return () => {
            if(window.innerWidth > 991) {
                window.removeEventListener('wheel', stopDefault)
            }
        }
    }, [onFeedBack])

    return (
        <div className={`${mode}`} id='feedback' >
            <div 
                className="container" 
                onMouseMove={() => onFeedBack()}
                onMouseLeave={() => leaveFeedBack()}
                // ref={feedbackContainer}
            >
                {/* <div className="feedback__list" 
                    // style={{transform: `translateY(-${scroll}px)`}} ref={feedbackList}
                >
                </div> */}
                    <FeedbackItem />
                    <FeedbackItem />
                    <FeedbackItem />
                    <FeedbackItem last={true}/>
            </div>

            <div className="bottom">
                <a href={screenWidth > 992 ? '/transfer' : '/profile#new_client'} className="main_button big">Передать Клиента</a>
                <h2>Кейсы</h2>
                
                <YandexButton />
            </div>

        </div>
    );
};

export default FeedBack;