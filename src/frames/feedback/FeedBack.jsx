import React, { useEffect, useRef } from 'react';

import './css/feedback.css';
import BottomHeader from '../../components/bottom_header/BottomHeader';
import YandexButton from '../../components/yandex_button/YandexButton';
import FeedbackItem from './components/FeedbackItem';
import Button from '../../components/button/Button';

const FeedBack = ({mode, blocked}) => {

    const feedbackContainer = useRef()

    const onElement = () => {
        blocked.current = true
    }

    const elementOut = () => {
        blocked.current = false
    }

    return (
        <div className={`${mode} feedback`}>
            <div 
                className="container" 
                ref={feedbackContainer} 
                onMouseOver={() => onElement()}
                onMouseOut={() => elementOut()}
            >

                <FeedbackItem />
                <FeedbackItem />
                <FeedbackItem />
                <FeedbackItem last={true}/>

            </div>

            <div className="bottom">
                {/* <BottomHeader title={'Кейсы'}/> */}
                <Button  mode={'big'} content={'Передать Клиента'}/>
                <h2>Кейсы</h2>
                
                <YandexButton />
            </div>

        </div>
    );
};

export default FeedBack;