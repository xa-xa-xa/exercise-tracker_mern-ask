import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(false);

  return (
    <nav className='flex items-center justify-between flex-wrap bg-red-700 p-2'>
      <Link
        to='/'
        onClick={() => setIsOpen(false)}
        className='flex items-center flex-shrink-0 text-white mr-6'>
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
        <div className='text-sm sm:flex-grow text-center flex sm:flex-row flex-col justify-center'>
          <Link
            to='/'
            onClick={() => setIsOpen(false)}
            className='block mt-4 sm:inline-bloc w-fulls sm:mt-0 text-red-200 hover:text-white sm:mr-12'>
            <svg
              className='inline stroke-current mr-1 sm:mt-0 text-red-200 hover:text-white'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 32 32'>
              <path
                fill='none'
                fillRule='evenodd'
                stroke='current'
                strokeWidth='1'
                d='M21.5 28H7c-1.105 0-2-.902-2-2V7c0-1.104.902-2 2-2h19c1.104 0 2 .895 2 1.994V21l-6 7h-.5zM6 11v15.001c0 .56.451.999 1.007.999H21v-4.994c0-1.12.894-2.006 1.998-2.006H27v-9H6zm0-1V6.999C6 6.447 6.439 6 6.999 6H26c.552 0 .999.45.999 1.007V10H6zm16 16.5v-4.491c0-.557.45-1.009.997-1.009H26.7L22 26.5zM13 18v1h7v-1h-7zm-5-1v3h3v-3H8zm1 1v1h1v-1H9zm4-4v1h12v-1H13zm-5-1v3h3v-3H8zm1 1v1h1v-1H9zm4 8v1h6v-1h-6zm-5-1v3h3v-3H8zm1 1v1h1v-1H9z'
              />
            </svg>
            List
          </Link>

          <Link
            to='/user'
            onClick={() => setIsOpen(false)}
            className='block mt-4 sm:inline-block sm:mt-0 text-red-200 hover:text-white sm:mr-12'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 22 15'
              className='inline stroke-current mr-1 mb-1 sm:mt-0 text-red-200 hover:text-white'>
              <g
                fill='none'
                fillRule='evenodd'
                stroke='current'
                strokeWidth='1'
                transform='translate(-679 -4102) translate(100 4044) translate(578 54)'>
                <path d='M0 0L24 0 24 24 0 24z' />
                <path
                  fill='current'
                  d='M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V8c0-.55-.45-1-1-1s-1 .45-1 1v2H2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1H6zm9 4c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z'
                />
              </g>
            </svg>
            Add User
          </Link>
        </div>
        <Link
          to='/create'
          onClick={() => setIsOpen(false)}
          className='inline-block text-sm px-2 py-1 mr-2 leading-none sm:border rounded text-white border-white hover:border-transparent hover:text-red-500 hover:bg-red-300 mt-4 sm:mt-0'>
          <svg
            className='inline stroke-current mr-1 sm:inline-block sm:mt-0 text-red-200 hover:text-white'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='22'
            viewBox='0 0 20 14'>
            <g
              fill='none'
              fillRule='evenodd'
              strokeWidth='1'
              transform='translate(-238 -956) translate(100 852) translate(136 98)'>
              <path d='M0 0L24 0 24 24 0 24z'></path>
              <path d='M2 14h8v2H2v-2zm0-4h12v2H2v-2zm0-4h12v2H2V6zm16 4h-2v4h-4v2h4v4h2v-4h4v-2h-4v-4z'></path>
            </g>
          </svg>
          Add Exercise
        </Link>

        {/* <Link
            to='#'
            className='inline-block text-sm px-2 py-1 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-500 hover:bg-white mt-4 sm:mt-0'>
            Log in
          </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
