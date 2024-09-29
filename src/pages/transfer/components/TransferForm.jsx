import React from 'react';
import CheckBox from '../../../frames/registration/components/CheckBox';
import Button from '../../../components/button/Button';
import useTransferUser from '../hooks/useTransferUser';

const TransferForm = () => {

    const transfer = useTransferUser()

    return (
        <form action="" onSubmit={(e) => transfer.sendData(e)}>
                <div className="check_box_wrapper">
                    <CheckBox labe={'previous'} group={transfer.transferUser.group} callback={transfer.setTransferUser}>первичный</CheckBox>
                    <CheckBox labe={'secondary'} group={transfer.transferUser.group} callback={transfer.setTransferUser}>вторичный</CheckBox>
                </div>

                <div className="input_wrapper">
                    <div className="input__item">
                        <input type="text" />
                        <label htmlFor="">ваше имя</label>
                    </div>

                    <div className="input__item">
                        <input type="text" />
                        <label htmlFor="">ваш номер телефона</label>
                    </div>

                    <div className="input__item">
                        <input type="text" />
                        <label htmlFor="">город</label>
                    </div>

                    <div className="input__item">
                        <input type="text" />
                        <label htmlFor="">агенство</label>
                    </div>
                    
                    <div className="input__item">
                        <input type="text" />
                        <label htmlFor="">планируемый бюджет</label>
                    </div>
                </div>

                <Button mode={'orange small'} content={'Отправить данные'}/>

            </form>
    );
};

export default TransferForm;