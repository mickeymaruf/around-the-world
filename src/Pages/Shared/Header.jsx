import React from 'react';
import logo from '../../assets/images/travel-edge-logo.png';

const Header = () => {
    return (
        <header>
            <nav className='w-10/12 mx-auto flex justify-between items-center'>
                <img className='' src={logo} alt="" />
                <ul className='flex items-center text-xl gap-8'>
                    <li>Reviews</li>
                    <li>Destination</li>
                    <li>Feedbacks</li>
                    <li>Pricing</li>
                    <button className='bg-yellow-300 px-6 py-2 rounded-md'>Login</button>
                </ul>
            </nav>
        </header>
    );
};

export default Header;