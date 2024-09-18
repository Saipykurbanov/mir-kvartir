import React from 'react';
import Check from './Check';

const CheckBox = ({group, labe, callback, children}) => {

    const changeGroup = () => {
        callback(prev => ({...prev, group: group === labe ? '' : labe}))
    }

    return (
        <div className="check_box" onClick={() => changeGroup()}>
            <Check labe={labe} group={group}/>
            <label htmlFor="" className="check__label">{children}</label>
        </div>
    );
};

export default CheckBox;