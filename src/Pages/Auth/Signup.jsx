import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import SocialAuth from './SocialAuth';
import toast from 'react-hot-toast';

const Signup = () => {
    const { createUser, userUpdate, verifyEmail } = useAuth();
    const [error, setError] = useState(null);
    const handleSubmit = (e) => {
        setError(null);
        e.preventDefault();
        const form = e.target;
        const firstName = form.first_name.value;
        const lastName = form.last_name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm_password.value;
        if (!email || !password || !firstName) {
            setError("Field can't be empty!")
            return;
        }
        if (password !== confirmPassword) {
            setError("Password didn't match!")
            return;
        }
        createUser(email, password)
            .then(result => {
                userUpdate(firstName, lastName)
                    .then(() => {
                        verifyEmail().then(() => {
                            toast.success("A verification mail has been sent!");
                        })
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }
    return (
        <div className='w-10/12 mx-auto'>
            <form onSubmit={handleSubmit} className='border w-6/12 mt-16 mx-auto p-10'>
                <h3 className='text-2xl font-bold'>Sign Up</h3>
                <div className='mt-6'>
                    <input name="first_name" className='border-b-2 placeholder:text-black p-3 pl-0 outline-none w-full' type="text" placeholder='First Name' />
                </div>
                <div className='mt-6'>
                    <input name="last_name" className='border-b-2 placeholder:text-black p-3 pl-0 outline-none w-full' type="text" placeholder='Last Name' />
                </div>
                <div className='mt-6'>
                    <input name="email" className='border-b-2 placeholder:text-black p-3 pl-0 outline-none w-full' type="email" placeholder='Username or Email' />
                </div>
                <div className='mt-6'>
                    <input name="password" className='border-b-2 placeholder:text-black p-3 pl-0 outline-none w-full' type="password" placeholder='Password' />
                </div>
                <div className='mt-6'>
                    <input name="confirm_password" className='border-b-2 placeholder:text-black p-3 pl-0 outline-none w-full' type="password" placeholder='Confirm Password' />
                </div>
                <div className='mt-6'>
                    <button className='bg-yellow-300 px-6 py-2 rounded-md w-full mb-2'>Sign Up</button>
                    <p>Already have an account? <Link className='text-blue-700 underline' to="/login">Login</Link></p>
                </div>
                <SocialAuth setError={setError} />
                {
                    error && <div className='text-red-500 mt-5'>{error}</div>
                }
            </form>
        </div>
    );
};

export default Signup;