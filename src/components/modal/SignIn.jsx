import React, { useState } from 'react';
import './css/modal.css';
import Store from '../../utils/Store';
import Button from '../button/Button';


const SignIn = () => {

    const [isOpen, setIsOpen] = useState('')
    Store.useListener('signIn', setIsOpen)

    const closeModal = () => {
        document.body.style.overflow = 'visible';
        setIsOpen('close')
    }

    return (
        <div className={`modal_wrapper ${isOpen}`} onMouseDown={closeModal}>

            <div className="sign_in" onMouseDown={(e) => e.stopPropagation()}>

                <form action="" onSubmit={''}>

                    <div className="input_block">
                        <div className='main_input'>
                            <input type="text" />
                            <div className="label">Логин</div>
                        </div>

                        <div className='main_input'>
                            <input type="password"  />
                            <div className="label">Пароль</div>
                        </div>
                    </div>
                    
                    <Button mode={'small'} content={'Войти'}/>

                    <a href="">Зарегистрироваться</a>
                </form>

            </div>

        </div>
    );
};

export default SignIn;