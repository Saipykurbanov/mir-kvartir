import React, { useEffect, useRef, useState } from 'react';

import './css/feedback.css';
import BottomHeader from '../../components/bottom_header/BottomHeader';
import YandexButton from '../../components/yandex_button/YandexButton';
import FeedbackItem from './components/FeedbackItem';
import Button from '../../components/button/Button';
import Store from '../../utils/Store';

const FeedBack = ({mode, blocked, page}) => {

    const feedbackContainer = useRef()
    const [block, setBlock] = useState(false)

    const onElement = (e) => {
        if(page === 7) {
            Store.setListener('block_scroll', true)
        } 
    }

    const elementOut = () => {
        Store.setListener('block_scroll', false)
    }

    // const onScrollEnd = (e) => {
    //     const target = e.currentTarget
    //     if (target.scrollTop <= 0) {
    //         Store.setListener('block_scroll', false)
    //         return
    //     }
    //     if (Math.floor(target.scrollHeight - target.scrollTop) === Math.floor(target.offsetHeight)) {
    //         Store.setListener('block_scroll', false)
    //         return
    //     }
    // }

    // useEffect(() => {
    //     feedbackContainer?.current?.addEventListener('scroll', (e) => onScrollEnd(e))

    //     return () => feedbackContainer?.current?.removeEventListener('scroll', (e) => onScrollEnd(e))
    // }, [])

    return (
        <div className={`${mode}`} id='feedback'>
            <div 
                className="container" 
                ref={feedbackContainer} 
                onMouseOver={(e) => onElement(e)}
                onMouseOut={() => elementOut()}
            >

                <FeedbackItem />
                <FeedbackItem />
                <FeedbackItem />
                <FeedbackItem last={true}/>

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