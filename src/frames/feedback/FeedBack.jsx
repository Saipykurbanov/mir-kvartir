import React from 'react';

import './css/feedback.css';
import YandexButton from '../../components/yandex_button/YandexButton';
import FeedbackItem from './components/FeedbackItem';
import useScrollFeedBack from './hooks/useScrollFeedBack';
import Button from '../../components/button/Button';
import useFeedBack from './hooks/useFeedBack';

const FeedBack = ({mode}) => {

    const {checkForAuth, onFeedBack, leaveFeedBack} = useFeedBack()

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
                <Button mode={'big'} content={'Передать Клиента'} callback={checkForAuth}/>
                <h2>Кейсы</h2>
                
                <YandexButton />
            </div>

        </div>
    );
};

export default FeedBack;