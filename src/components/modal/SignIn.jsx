import React, { useState } from 'react';
import './css/modal.css';
import Store from '../../utils/Store';
import Button from '../button/Button';


const SignIn = () => {

    const [isOpen, setIsOpen] = useState('')
    const [type, setType] = useState('password')
    Store.useListener('signIn', setIsOpen)

    const closeModal = () => {
        document.body.style.overflow = 'visible';
        Store.setListener('block_scroll', false)
        setIsOpen('close')
    }

    const switchType = () => {
        console.log('hi')
        if(type === 'password') {
            return setType('text')
        }
        if(type === 'text') {
            return setType('password')
        }
        return setType('password')
    }

    const register = () => {
        closeModal()
        Store.setListener('theme', 6)
        Store.setListener('change_page_header', [(5 * 100), 6])
    }

    return (
        <div className={`modal_wrapper ${isOpen}`} onMouseDown={closeModal}>

            <div className="sign_in" onMouseDown={(e) => e.stopPropagation()}>

                <div className="sign_in_head">
                    <p>Вход</p>
                    <div className="cross" onMouseDown={closeModal}></div>
                </div>

                <div className="form_container">
                    <form action="" onSubmit={''}>

                        <div className="input_block">
                            <div className='main_input'>
                                <input type="text" />
                                <div className="label">Логин</div>
                            </div>

                            <div className='main_input'>
                                <input type={type} />
                                <div className="password_check" onMouseDown={switchType}>
                                    <img src='/images/modal/hidden.svg' alt="" />
                                </div>
                                <div className="label">Пароль</div>
                            </div>
                        </div>
                        
                        <Button mode={'small'} content={'Войти'}/>

                    </form>
                    <button className='register_link' onClick={register}>Зарегистрироваться</button>
                </div>

            </div>

        </div>
    );
};

export default SignIn;