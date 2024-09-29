import React from 'react';

const Check = ({labe, group}) => {

    return <div className={`check ${group === labe ? 'active' : ''}`}></div>
};

export default Check;