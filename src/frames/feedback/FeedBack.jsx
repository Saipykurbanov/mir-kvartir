import React, { useEffect, useRef, useState } from 'react';

import './css/feedback.css';
import YandexButton from '../../components/yandex_button/YandexButton';
import FeedbackItem from './components/FeedbackItem';
import Store from '../../utils/Store';
import useScrollFeedBack from './hooks/useScrollFeedBack';

const FeedBack = ({mode, blocked, page, mainScroll}) => {

    const {scroll, feedbackContainer, feedbackList, scrollFeedBack} = useScrollFeedBack(page, mainScroll)

    return (
        <div className={`${mode}`} id='feedback' onWheel={(e) => scrollFeedBack(e)}>
            <div 
                className="container" 
                ref={feedbackContainer}
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