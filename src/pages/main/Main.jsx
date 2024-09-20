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
import Contacts from '../../frames/contacts/Contacts';
import Header from '../../components/header/Header';
import Registration from '../../frames/registration/Registration';
import Service from '../../frames/service/Service';

const Main = () => {

    const {isBlocked, scroll, page} = useScrollPages()

    return (
        <div className='main_page'>

            <Header />

            <div className={`main_wrapper`} style={{transform: `translateX(-${scroll}dvw)`}}>

                <StartPage mode={`page`}/>
                <About mode={`page about`}/>
                <Objects mode={`page objects`}/>
                <Process mode={`page process`}/>
                <Managers mode={`page`}/>

                <Service mode={`page service`}/>

                <Registration mode={'page desc'}/>
                <FeedBack mode={`page`} blocked={isBlocked} page={page}/>
                <Commission mode={`page`}/>  
                <Contacts mode={`page`}/>

            </div>
            

        </div>
    );
};

export default Main;