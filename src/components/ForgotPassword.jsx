import React from 'react';
import { db } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const history=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailVal = e.target.email.value;
        sendPasswordResetEmail(db, emailVal)
            .then(() => {
                alert("Check your email for password reset instructions.");
                history('/login');
                
            })
            .catch((err) => {
                alert("An error occurred: " + err.message);
            });
            
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Forgot Password</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 18a8 8 0 100-16 8 8 0 000 16zm1-7a1 1 0 00-2 0v2a1 1 0 102 0v-2zm0-4a1 1 0 00-2 0v2a1 1 0 102 0V7z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
