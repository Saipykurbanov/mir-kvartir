import React from 'react';

const Check = ({labe, group, setNewUser}) => {

    const changeGroup = () => {
        setNewUser(prev => ({...prev, group: group === labe ? '' : labe}))
    }

    return <div className={`check ${group === labe ? 'active' : ''}`} onClick={() => changeGroup()}></div>
};

export default Check;