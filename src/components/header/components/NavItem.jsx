import React from 'react';
import decoration from './../images/decor2.svg'
import Store from '../../../utils/Store';

const NavItem = ({title, decor, mode, num, page}) => {

    const changePage = () => {
        Store.setListener('change_page_header', ((num - 1) * 100))
        Store.setListener('change_page', num)
    }

    return (
        <div className={`nav_item ${page === num ? 'active' : ''}`}>
            <div className="pagination" onClick={() => changePage()}>
                {decor.left && <img src={decoration} alt="" className="decor left" />}

                <div className="inner_circle"></div>
                
                {decor.right && <img src={decoration} alt="" className="decor right" />}
            </div>

            <span className={`${mode}`} onClick={() => changePage()}>{title}</span>
        </div>
    );
};

export default NavItem;