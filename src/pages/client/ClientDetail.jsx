import React, { useRef } from 'react';
import './css/client.css';
import { useParams } from 'react-router-dom';


const ClientDetail = () => {

    const {id} = useParams()
    const phone = useRef(null)

    const btnBack = () => {
        window.history.back()
    }

    const copy = async () => {

        if(phone.current) {
            const text = phone.current.textContent;
            await navigator.clipboard.writeText(text);
        }
    }

    return (
        <div className='client_detail'>
            <div className="client_head" onClick={btnBack}>

                <svg width="13" height="26" viewBox="0 0 13 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 24L3 13L11 2" stroke="#6A6A6A" strokeWidth="4"/>
                </svg>

                <div className="info">
                    <div className="name">Кукуев О.К.</div>
                    <div className="status at_work">клиент в работе</div>
                </div>
            </div>

            <div className="filed">
                <div className="label">телефон</div>
                <div className="value number" ref={phone}>
                    +7 978 829 76 98

                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={copy}>
                        <rect x="3.17188" y="0.5" width="11" height="11" rx="1.5" stroke="#9C9C9C"/>
                        <rect x="0.5" y="3.21533" width="11" height="11" rx="1.5" stroke="#9C9C9C" strokeDasharray="2 2"/>
                    </svg>

                </div>
            </div>

            <div className="filed second">
                <div className="label">город</div>
                <div className="value">Санкт-Петербург</div>
            </div>

            <div className="filed">
                <div className="label">агенство</div>
                <div className="value">ИП Кукуев</div>
            </div>

            <div className="filed second">
                <div className="label">комментарий</div>
                <div className="value">некий комент к ситуации и процессу работы, который дает понимание, над чем именно работается и какие сложности в работе возникают</div>
            </div>
        </div>
    );
};

export default ClientDetail;