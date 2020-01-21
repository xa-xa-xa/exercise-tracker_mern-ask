import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [username, setUsername] = useState('');

  const onChange = e => setUsername(e.target.value);

  const onSubmit = e => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/users/add', { username: username })
      .then(res => {
        console.log(res.status);
        if (res.status === 200) window.location = '/';
      });
  };

  return (
    <form
      onSubmit={onSubmit}
      className='flex flex-col w-11/12 md:w-3/5 m-0 p-5 bg-white tw-h-full shadow rounded-lg text-center m-auto mt-8'>
      <div className='text-2xl text-indigo-900 text-center mb-4'>
        Create an User{' '}
      </div>

      <div className='flex-col flex py-3'>
        <label className='pb-2 text-gray-700 font-semibold'>User Name:</label>
        <input
          name='username'
          onChange={onChange}
          value={username}
          type='text'
          className='p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200'
          placeholder='Add user name'
        />
      </div>
      <button
        className=' sm:w-2/6 mt-8 rounded-lg p-3 bg-indigo-400 text-white hover:bg-indigo-300 self-center w-full'
        type='submit'>
        ADD USER
      </button>
    </form>
  );
};

export default CreateUser;
