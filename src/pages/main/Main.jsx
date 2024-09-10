import React from 'react';
import useScrollPages from '../../hooks/useScrollPages';
import About from '../../frames/about/About';
import StartPage from '../../frames/start-page/StartPage';

import './css/main_page.css';
import Managers from '../../frames/managers/Managers';
import FeedBack from '../../frames/feedback/FeedBack';
import Objects from '../../frames/objects/Objects';

const Main = () => {

    const [page] = useScrollPages()

    return (
        <div className='main_page'>
            
            <StartPage mode={page > 1 ? 'prev' : ''}/>
            
            <About mode={`page about ${page >= 2 ? "active" : ""} ${page > 2 ? 'prev' : ''}`}/>
            <Objects mode={`page objects ${page >= 3 ? "active" : ""} ${page > 3 ? 'prev' : ''}`}/>
            <Managers mode={`page ${page >= 5 ? "active" : ""} ${page > 5 ? 'prev' : ''}`}/>
            <FeedBack mode={`page ${page >= 6 ? "active" : ""} ${page > 6 ? 'prev' : ''}`}/>

        </div>
    );
};

export default Main;