import React from 'react';

const ClientModal = () => {
    return (
        <div className='client_modal'>
            <div className="client_head">

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
                <div className="value number">
                    +7 978 829 76 98
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

export default ClientModal;