import React from 'react';
import useScrollPages from '../../hooks/useScrollPages';
import About from '../../frames/about/About';
import StartPage from '../../frames/start-page/StartPage';

import './css/main_page.css';
import Managers from '../../frames/managers/Managers';
import FeedBack from '../../frames/feedback/FeedBack';

const Main = () => {

    const [page] = useScrollPages()

    return (
        <div className='main_page'>
            
            <StartPage />
            <About mode={`page ${page >= 2 ? "active" : ""}`}/>
            <Managers mode={`page ${page >= 5 ? "active" : ""}`}/>
            <FeedBack mode={`page ${page >= 6 ? "active" : ""}`}/>

        </div>
    );
};

export default Main;