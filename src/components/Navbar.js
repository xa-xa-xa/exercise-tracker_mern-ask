import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(false);

  return (
    <nav className='flex items-center justify-between flex-wrap bg-red-400	 p-2'>
      <Link to='/' className='flex items-center flex-shrink-0 text-white mr-6'>
        <span className='font-semibold text-xl tracking-tight'>
          Your Exercise Logger
        </span>
      </Link>
      <div className='block sm:hidden'>
        <button
          className='flex items-center px-3 py-2 border rounded text-red-200 border-red-400 hover:text-white hover:border-white'
          onClick={() => {
            setIsOpen(!isOpen);
            console.log(isOpen);
          }}>
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div
        className={`w-full flex-grow sm:flex-row  sm:flex items-center sm:w-auto sm:border-0 sm:mt-0 sm:mb-0 ${
          isOpen ? 'hidden' : 'flex flex-col border-t mt-2 mb-2'
        } flex`}>
        <div className='text-sm sm:flex-grow text-center'>
          <Link
            to='/'
            className='block mt-4 sm:inline-block sm:mt-0 text-red-200 hover:text-white sm:mr-12'>
            List
          </Link>
          <Link
            to='/create'
            className='block mt-4 sm:inline-block sm:mt-0 text-red-200 hover:text-white'>
            Add Exercise
          </Link>
        </div>
        <div>
          <Link
            to='/user'
            className='inline-block text-sm px-2 py-2 mr-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-500 hover:bg-white mt-4 sm:mt-0'>
            Register
          </Link>
          <Link
            to='#'
            className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-500 hover:bg-white mt-4 sm:mt-0'>
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
