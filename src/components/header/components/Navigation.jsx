import React, { useState } from 'react';
import decor from './../images/decor.svg'
import NavItem from './NavItem';
import Store from '../../../utils/Store';

const Navigation = () => {
    const [page, setPage] = useState(1)

    Store.useListener('change_page', setPage)

    return (
        <div className='navigation'>

            <NavItem 
                page={page}
                num={1}
                title={'Главная'}
                mode={'top'}
                decor={{
                    right: true,
                    left: false
                }}
            />
                <div className="line"></div>
            <NavItem 
                page={page}
                num={2}
                title={'Услуги'}
                decor={{
                    right: true,
                    left: true
                }}
            />
                <div className="line"></div>
            <NavItem 
                page={page}
                num={3}
                title={'Объекты'}
                mode={'top'}
                decor={{
                    right: true,
                    left: true
                }}
            />
                <div className="line"></div>
            <NavItem 
                page={page}
                num={4}
                title={'Как это работает'}
                decor={{
                    right: true,
                    left: true
                }}
            />
                <div className="line"></div>
            <NavItem 
                page={page}
                num={5}
                title={'УПРАВЛЯЮЩИЕ'}
                mode={'top'}
                decor={{
                    right: true,
                    left: true
                }}
            />
                <div className="line"></div>
            <NavItem 
                page={page}
                num={6}
                title={'Стать партнёром'}
                decor={{
                    right: true,
                    left: true
                }}
            />
                <div className="line"></div>
            <NavItem 
                page={page}
                num={7}
                title={'Отзывы'}
                mode={'top'}
                decor={{
                    right: true,
                    left: true
                }}
            />
                <div className="line"></div>
            <NavItem 
                page={page}
                num={8}
                title={'Кейсы'}
                decor={{
                    right: true,
                    left: true
                }}
            />
                <div className="line"></div>
            <NavItem 
                page={page}
                num={9}
                title={'Комиссия'}
                mode={'top'}
                decor={{
                    right: true,
                    left: true
                }}
            />
                <div className="line"></div>
            <NavItem 
                page={page}
                num={10}
                title={'Контакты'}
                decor={{
                    right: false,
                    left: true
                }}
            />
        </div>
    );
};

export default Navigation;