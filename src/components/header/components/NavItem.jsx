import React from 'react';
import Store from '../../../utils/Store';

const NavItem = ({page, setPage, title, decor, mode, num}) => {

    const changePage = () => {
        Store.setListener('change_page_header', [((num - 1) * 100), num])
        Store.setListener('change_page', num)
    }

    return (
        <div className={`nav_item ${page === num ? 'active' : ''}`} >
            <div className="pagination" onClick={() => changePage()}>
                {decor.left && <img src='/images/header/decor2.svg' alt="" className="decor left" />}

                <div className="inner_circle"></div>
                
                {decor.right && <img src='/images/header/decor2.svg' alt="" className="decor right" />}
            </div>

            <span className={`${mode}`} onClick={() => changePage()}>{title}</span>
        </div>
    );
};

export default NavItem;