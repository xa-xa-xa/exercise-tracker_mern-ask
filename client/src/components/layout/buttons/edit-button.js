import React from 'react';
import { Link } from 'react-router-dom';

function EditButton(exercise) {
  return (
    <Link to={'/edit/' + exercise._id} className='inline-flex'>
      <button
        type='button'
        className='flex sm:mr-3 mr-1 text-xs bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 md:pl-2 sm:pr-0 rounded-full focus:outline-none focus:shadow-outline'>
        <svg
          className='inline fill-current sm:h-4 h-4 sm:w-4 w-3 m-auto sm:mr-2'
          viewBox='0 0 24 24'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'>
          <g
            id='Icons'
            stroke='none'
            strokeWidth='1'
            fill='none'
            fillRule='evenodd'>
            <g id='Outlined' transform='translate(-780.000000, -2015.000000)'>
              <g id='Editor' transform='translate(100.000000, 1960.000000)'>
                <g
                  id='Outlined-/-Editor-/-border_color'
                  transform='translate(680.000000, 54.000000)'>
                  <polygon id='Path' points='0 1 24 1 24 25 0 25' />
                  <path
                    d='M14,4.25 L4,14.25 L4,18 L7.75,18 L17.75,8 L14,4.25 Z M6.92,16 L6,16 L6,15.08 L14,7.08 L14.92,8 L6.92,16 Z M20.71,5.04 C21.1,4.65 21.1,4.02 20.71,3.63 L18.37,1.29 C17.98,0.9 17.35,0.9 16.96,1.29 L15,3.25 L18.75,7 L20.71,5.04 Z'
                    id='Primary-Color'
                    fill='white'></path>
                  <polygon fill='#D0D0D0' points='0 21 24 21 24 25 0 25' />
                </g>
              </g>
            </g>
          </g>
        </svg>
        <span className='hidden md:flex sm:pr-2'>Edit</span>
      </button>
    </Link>
  );
}

export default EditButton;
