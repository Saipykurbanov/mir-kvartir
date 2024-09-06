import React from 'react';
import useScrollPages from '../../hooks/useScrollPages';
import About from '../../frames/about/About';
import StartPage from '../../frames/start-page/StartPage';

const Main = () => {

    const [page] = useScrollPages()

    return (
        <div className='main_page'>
            
            <StartPage />
            <About mode={`page ${page >= 2 ? "active" : ""}`}/>

        </div>
    );
};

export default Main;