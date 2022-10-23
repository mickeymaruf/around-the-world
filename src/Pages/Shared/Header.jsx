import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/travel-edge-logo.png';
import { useAuth } from '../../contexts/AuthProvider';
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <header>
            <nav className='w-10/12 mx-auto flex items-center py-3'>
                <Link to="/"><img className='w-28' src={logo} alt="" /></Link>
                <ul className='flex items-center text-xl gap-8 w-full ml-5'>
                    <li>Reviews</li>
                    <li>Destination</li>
                    <li>Feedbacks</li>
                    <li>Pricing</li>
                    <div className='ml-auto'>
                        {
                            user?.uid ?
                                <div className='flex items-center gap-4'>
                                    <p>{user?.displayName}</p>
                                    <Link>
                                        {
                                            user.photoURL ?
                                                <img className='w-10 rounded-full' src={user.photoURL} alt="" />
                                                :
                                                <div className='bg-gray-100 p-2'>
                                                    <FaUserAlt className='text-gray-500' />
                                                </div>
                                        }
                                    </Link>
                                    <button onClick={logOut} className='bg-yellow-300 px-6 py-2 rounded-md'>Logout</button>
                                </div>
                                :
                                <Link to="/login"><button className='bg-yellow-300 px-6 py-2 rounded-md'>Login</button></Link>
                        }
                    </div>
                </ul>
            </nav>
        </header>
    );
};

export default Header;