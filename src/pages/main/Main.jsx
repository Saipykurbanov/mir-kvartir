import React from 'react';
import useScrollPages from '../../hooks/useScrollPages';
import About from '../../frames/about/About';
import StartPage from '../../frames/start-page/StartPage';

import './css/main_page.css';
import Managers from '../../frames/managers/Managers';
import FeedBack from '../../frames/feedback/FeedBack';
import Commission from '../../frames/commission/Commission';
import Objects from '../../frames/objects/Objects';
import Process from '../../frames/process/Process';

const Main = () => {

    const {page, isBlocked} = useScrollPages()

    return (
        <div className='main_page'>
            
            <StartPage mode={page > 1 ? 'prev' : ''}/>
            
            <About mode={`page about ${page >= 2 ? "active" : ""} ${page > 2 ? 'prev' : ''}`}/>
            <Objects mode={`page objects ${page >= 3 ? "active" : ""} ${page > 3 ? 'prev' : ''}`}/>
            <Process mode={`page process ${page >= 4 ? "active" : ""} ${page > 4 ? 'prev' : ''}`}/>
            <Managers mode={`page ${page >= 5 ? "active" : ""} ${page > 5 ? 'prev' : ''}`}/>
            <div className={`page ${page >= 6 ? "active" : ""} ${page > 6 ? 'prev' : ''}`}></div>
            <FeedBack mode={`page ${page >= 7 ? "active" : ""} ${page > 7 ? 'prev' : ''}`}/>
            <div className={`page ${page >= 8 ? "active" : ""} ${page > 8 ? 'prev' : ''}`}></div>
            <Commission mode={`page ${page >= 9 ? "active" : ""} ${page > 9 ? 'prev' : ''}`}/>  
            <div className={`page ${page >= 10 ? "active" : ""} ${page > 10 ? 'prev' : ''}`}></div>

        </div>
    );
};

export default Main;