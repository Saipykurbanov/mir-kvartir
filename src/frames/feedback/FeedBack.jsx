import React from 'react';

import './css/feedback.css';
import BottomHeader from '../../components/bottom_header/BottomHeader';
import YandexButton from '../../components/yandex_button/YandexButton';
import FeedbackItem from './components/FeedbackItem';

const FeedBack = ({mode}) => {
    return (
        <div className={`feedback ${mode}`}>
            <div className="container">

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