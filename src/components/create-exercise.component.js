import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const CreateExercise = () => {
  const initialState = {
    username: '',
    description: '',
    duration: 0,
    date: new Date(),
    users: []
  };

  const activity = [
    'running',
    'swimming',
    'cycling',
    'gym',
    'hiking',
    'soccer',
    'walking',
    'tennis'
  ];

  // const [user, setUser] = useState('test user');

  const [exercise, setExercise] = useState(initialState);

  const onDateChange = e => setExercise({ ...exercise, date: e });

  const onChange = e => {
    if (e.target.name === 'activity') {
      setExercise({ ...exercise, description: e.target.value });
    } else {
      setExercise({ ...exercise, [e.target.name]: e.target.value });
    }
  };

  // useEffect(() => {

  //   return () => {};
  // }, []);

  const onSubmit = e => {
    e.preventDefault();
    // window.location = '/';
  };

  const { duration, date, description, username, users } = exercise;

  return (
    <div className='flex justify-center mt-8'>
      <form className='md:w-3/4 m-0 p-5 bg-white w-full tw-h-full shadow md:rounded-lg'>
        <div className='text-2xl text-indigo-900 text-center mb-4'>
          Create an exercise{' '}
        </div>

        <div className='flex-col flex py-3'>
          <label className='pb-2 text-gray-700 font-semibold'>User:</label>
          <input
            name='username'
            onChange={onChange}
            value={username}
            type='text'
            className='p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200'
            placeholder='User Name'
          />
        </div>

        <div className='flex-col flex py-3'>
          <label className='pb-2 text-gray-700 font-semibold'>
            Exercise Type:
          </label>
          <div className='flex flex-row'>
            <select
              onChange={onChange}
              name='activity'
              className='flex w-4/12 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200 h-10 text-gray-600'
              placeholder=' or choose from list'
              id='grid-state'>
              {activity.sort().map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <label className='w-1/12 font-semibold self-center text-center text-gray-700'>
              or
            </label>

            <input
              onChange={onChange}
              name='description'
              value={description}
              type='text'
              className='w-7/12 p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200 text-gray-600 '
              placeholder='Type your own activity'
            />
          </div>
        </div>

        <div className='flex-col flex py-3'>
          <label className='pb-2 text-gray-700 font-semibold'>Duration:</label>
          <input
            onChange={onChange}
            name='duration'
            type='number'
            value={duration}
            className='p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200 text-gray-600'
            placeholder='How many minutes'
          />
        </div>

        <div className='flex-col flex py-3'>
          <label className='pb-2 text-gray-700 font-semibold'>Date:</label>
          <DatePicker
            selected={date}
            onChange={onDateChange}
            name='date'
            className='p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200 text-gray-600 text-center'
            placeholder='date'
            placeholderText='I have been cleared!'
          />
        </div>

        <div className='mt-2'>
          <button
            onChange={onSubmit}
            className='rounded-lg p-3 bg-indigo-400 text-white w-full hover:bg-indigo-300'
            type='submit'>
            ADD EXERCISE
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateExercise;
