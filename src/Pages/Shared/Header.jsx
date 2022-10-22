import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/travel-edge-logo.png';

const Header = () => {
    return (
        <header>
            <nav className='w-10/12 mx-auto flex justify-between items-center'>
                <Link to="/"><img className='w-28' src={logo} alt="" /></Link>
                <ul className='flex items-center text-xl gap-8'>
                    <li>Reviews</li>
                    <li>Destination</li>
                    <li>Feedbacks</li>
                    <li>Pricing</li>
                    <Link to="/login"><button className='bg-yellow-300 px-6 py-2 rounded-md'>Login</button></Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;