import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
                <div className='logo'>Movie App</div>

            </Link>
            <div className='user-image'>
                <img  src='https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png' alt='user'/>
            </div>
        </div>
    );
};

export default Header;