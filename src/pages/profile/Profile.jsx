import React from 'react';
import './css/profile.css';
import Clients from './components/Clients';
import User from './components/User';
import Ofer from './components/Ofer';


const Profile = () => {
    return (
        <div className='profile'>
            <div className="profile_container">

                <User />

                <Clients />

            </div>

            <Ofer />
        </div>
    );
};

export default Profile;