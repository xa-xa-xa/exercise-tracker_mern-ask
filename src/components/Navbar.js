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
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg
              className='fill-current h-3 w-3'
              version='1.1'
              id='Layer_1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              viewBox='0 0 100.353 100.353'
              style={{ enableBackground: 'new 0 0 100.353 100.353' }}
              xmlSpace='preserve'>
              <path d='M12.27,69.461' />
              <path
                d='M15.375,99.997L15.375,99.997c-0.387,0-0.757-0.154-1.03-0.427L0.427,85.646
	c-0.569-0.569-0.569-1.491,0-2.06l33.634-33.633L1.485,17.388c-0.273-0.273-0.427-0.644-0.427-1.03s0.154-0.757,0.427-1.03
	L15.399,1.415c0.546-0.546,1.513-0.546,2.059,0l32.57,32.571L83.597,0.426c0.569-0.568,1.49-0.568,2.059,0l13.918,13.908
	c0.273,0.273,0.427,0.644,0.427,1.03c0,0.387-0.154,0.757-0.427,1.03L66,49.953l32.57,32.585c0.569,0.568,0.569,1.49,0,2.059
	L84.663,98.51c-0.546,0.546-1.513,0.547-2.059,0L50.028,65.94L16.406,99.568C16.132,99.843,15.761,99.997,15.375,99.997z
	 M3.516,84.617L15.375,96.48l33.622-33.628c0.569-0.569,1.49-0.569,2.059,0l32.576,32.57L95.48,83.568L62.91,50.982
	c-0.569-0.569-0.569-1.491,0-2.06l33.573-33.558L84.625,3.515L51.056,37.074c-0.569,0.568-1.49,0.568-2.059,0l-32.57-32.57
	L4.573,16.358l32.576,32.564c0.273,0.273,0.427,0.644,0.427,1.03c0,0.386-0.154,0.756-0.427,1.03L3.516,84.617z'
              />
            </svg>
          ) : (
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`w-full flex-grow sm:flex-row  sm:flex items-center sm:w-auto sm:border-0 sm:mt-0 sm:mb-0 ${
          isOpen ? 'flex flex-col border-t mt-2 mb-2' : 'hidden'
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
        <div className='mt-8 sm:mt-0'>
          <Link
            to='/user'
            className='inline-block text-sm px-2 py-1 mr-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-500 hover:bg-white mt-4 sm:mt-0'>
            Register
          </Link>
          <Link
            to='#'
            className='inline-block text-sm px-2 py-1 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-500 hover:bg-white mt-4 sm:mt-0'>
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
