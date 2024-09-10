import React, { useEffect, useRef } from 'react';

import './css/feedback.css';
import BottomHeader from '../../components/bottom_header/BottomHeader';
import YandexButton from '../../components/yandex_button/YandexButton';
import FeedbackItem from './components/FeedbackItem';

const FeedBack = ({mode, blocked}) => {

    const feedbackContainer = useRef()

    const onElement = () => {
        blocked.current = true
    }

    const elementOut = () => {
        blocked.current = false
    }

    return (
        <div className={`feedback ${mode}`}>
            <div 
                className="container" 
                ref={feedbackContainer} 
                onMouseOver={() => onElement()}
                onMouseOut={() => elementOut()}
            >

                <FeedbackItem />
                <FeedbackItem />

            </div>

            <div className="bottom">
                <BottomHeader title={'Кейсы'}/>
                <YandexButton />
            </div>

        </div>
    );
};

export default FeedBack;