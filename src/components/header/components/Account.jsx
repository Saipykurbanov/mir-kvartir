import React from 'react';
import Button from '../../button/Button';
import Store from '../../../utils/Store';

const Account = ({openModal, changePage, page}) => {
    return (
        <div className="account">
            <Button mode={'grey'} content={'Вход'} callback={openModal}/> 
            {page === 6 ? 
                <Button mode={'grey'} content={'На главную'} callback={() => {
                    changePage(1)
                    Store.setListener('change_page_header', [0, 1])
                }}/> 
                :
                <Button mode={'orange'} content={'Регистрация'} callback={() => {
                    changePage(6)
                    Store.setListener('change_page_header', [(5 * 100), 6])
                }}/>
            }
        </div>
    );
};

export default Account;