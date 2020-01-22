import React from 'react';

const DeleteButton = ({ exercise, deleteExercise }) => {
  return (
    <button
      type='button'
      onClick={() => deleteExercise(exercise._id)}
      className='inline-flex text-xs bg-red-500 hover:bg-red-700 text-white py-1 px-2 md:pl-2 sm:pr-0 md:pr-2 rounded-full focus:outline-none focus:shadow-outline'>
      <svg
        className='inline fill-current sm:h-4 h-4 sm:w-4 w-3 m-auto sm:mr-2'
        viewBox='0 0 512 512'
        xmlSpace='preserve'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'>
        <polygon points='445.2,109.2 402.8,66.8 256,213.6 109.2,66.8 66.8,109.2 213.6,256 66.8,402.8 109.2,445.2 256,298.4 402.8,445.2   445.2,402.8 298.4,256 ' />
      </svg>
      <span className='hidden md:flex'>Delete</span>
    </button>
  );
};

export default DeleteButton;
