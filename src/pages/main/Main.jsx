import React from 'react';
import useScrollPages from '../../hooks/useScrollPages';
import About from '../../frames/about/About';
import StartPage from '../../frames/start-page/StartPage';

import './css/main_page.css';
import Managers from '../../frames/managers/Managers';
import FeedBack from '../../frames/feedback/FeedBack';
import Commission from '../../frames/commission/Commission';

const Main = () => {

    const {page, isBlocked} = useScrollPages()

    return (
        <div className='main_page'>
            
            <StartPage />
            <About mode={`page ${page >= 2 ? "active" : ""}`}/>
            <Managers mode={`page ${page >= 5 ? "active" : ""}`}/>
            <FeedBack mode={`page ${page >= 7 ? "active" : ""}`} blocked={isBlocked}/>
            <Commission mode={`page ${page >= 9 ? "active" : ""}`}/>
            
        </div>
    );
};

export default Main;