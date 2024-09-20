import React, { useState } from 'react';
import './css/modal.css';
import Store from '../../utils/Store';
import Button from '../button/Button';
import ckeck from './images/hidden.svg'


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

    return (
        <div className={`modal_wrapper ${isOpen}`} onMouseDown={closeModal}>

            <div className="sign_in" onMouseDown={(e) => e.stopPropagation()}>

                <div className="sign_in_head">
                    <p>Вход</p>
                    <div className="cross" onMouseDown={closeModal}></div>
                </div>

                <form action="" onSubmit={''}>

                    <div className="input_block">
                        <div className='main_input'>
                            <input type="text" />
                            <div className="label">Логин</div>
                        </div>

                        <div className='main_input'>
                            <input type={type} />
                            <div className="password_check" onMouseDown={switchType}>
                                <img src={ckeck} alt="" />
                            </div>
                            <div className="label">Пароль</div>
                        </div>
                    </div>
                    
                    <Button mode={'small'} content={'Войти'}/>

                    <a className='register_link' href="">Зарегистрироваться</a>
                </form>

            </div>

        </div>
    );
};

export default SignIn;