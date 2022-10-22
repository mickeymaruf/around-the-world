import React from 'react';
import { Link } from 'react-router-dom';
import SocialAuth from './SocialAuth';

const Signup = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='border w-6/12 mt-16 mx-auto p-10'>
                <h3 className='text-2xl font-bold'>Login</h3>
                <div className='mt-6'>
                    <input className='border-b-2 placeholder:text-black p-3 pl-0 outline-none w-full' type="text" placeholder='First Name' />
                </div>
                <div className='mt-6'>
                    <input className='border-b-2 placeholder:text-black p-3 pl-0 outline-none w-full' type="text" placeholder='Last Name' />
                </div>
                <div className='mt-6'>
                    <input className='border-b-2 placeholder:text-black p-3 pl-0 outline-none w-full' type="email" placeholder='Username or Email' />
                </div>
                <div className='mt-6'>
                    <input className='border-b-2 placeholder:text-black p-3 pl-0 outline-none w-full' type="password" placeholder='Password' />
                </div>
                <div className='mt-6'>
                    <input className='border-b-2 placeholder:text-black p-3 pl-0 outline-none w-full' type="confirm" placeholder='Confirm Password' />
                </div>
                <div className='mt-6'>
                    <button className='bg-yellow-300 px-6 py-2 rounded-md w-full'>Login</button>
                    <p>Don't have an account? <Link to="/signup">Create a new one</Link></p>
                </div>
                <SocialAuth />
            </div>
        </div>
    );
};

export default Signup;