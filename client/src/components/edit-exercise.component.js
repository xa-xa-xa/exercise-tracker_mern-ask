import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';

import 'react-datepicker/dist/react-datepicker.css';

const EditExercise = props => {
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

  const getAnExercise = async => {
    console.log('getting from server...');
    axios
      .get('http://localhost:5000/exercises/' + props.match.params.id)
      .then(async res => {
        if (res.data) {
          setExercise({
            username: res.data.username,
            description: res.data.description,
            duration: res.data.duration,
            date: new Date(res.data.date)
          });
          setLoaded(false);
        }
      })
      .catch(err => console.log(err));
  };

  const [exercise, setExercise] = useState({
    username: '',
    description: '',
    duration: '',
    date: ''
  });

  const [users, setUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const onDateChange = e => setExercise({ ...exercise, date: e });

  const onChange = e => {
    if (e.target.name === 'activity') {
      setExercise({ ...exercise, description: e.target.value });
    } else {
      setExercise({ ...exercise, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    axios
      .post(
        'http://localhost:5000/exercises/update/' + props.match.params.id,
        exercise
      )
      .then(res => {
        if (res.status === 200) window.location = '/';
      })
      .catch(err => {
        console.log('EDIT Exercise ERROR(fe): ', err);
      });
  };

  useEffect(() => {
    getAnExercise();

    axios.get('http://localhost:5000/users/').then(res => {
      if (res.data.length > 0) {
        setUsers(res.data.map(user => user.username));
        setLoaded(true);
      }
    });

    return () => {};
  }, []);

  const { duration, date, description, username } = exercise;

  return (
    <div className='flex justify-center md:mt-8'>
      <form
        className='md:w-3/4 m-0 p-5 bg-white w-full tw-h-full shadow md:rounded-lg rounded-lg'
        onSubmit={onSubmit}>
        <div className='text-2xl text-indigo-900 text-center mb-4'>
          Edit an exercise{' '}
        </div>

        <div className='flex-col flex py-3'>
          <label className='pb-2 text-gray-700 font-semibold'>User:</label>
          <select
            required
            value={username}
            onChange={onChange}
            name='username'
            className='flex sm:w-5/12 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200 h-10 text-gray-600'>
            <option className='hidden' value={username}>
              {username}
            </option>

            {loaded ? (
              users.map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              ))
            ) : (
              <option> loading...</option>
            )}
          </select>
        </div>

        <div className='flex-col flex py-3'>
          <label className='pb-2 text-gray-700 font-semibold'>
            Exercise Type:
          </label>
          <div className='flex flex-row'>
            <select
              required
              onChange={onChange}
              name='activity'
              className='flex w-4/12 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200 h-10 text-gray-600'
              placeholder=' or choose from list'
              id='grid-state'>
              <option value={description} className='hidden'>
                {description}
              </option>

              {activity.sort().map((item, idx) => (
                <option key={idx} value={item.toLowerCase()}>
                  {item.toLowerCase()}
                </option>
              ))}
            </select>

            <label className='w-1/12 font-semibold self-center text-center text-gray-700'>
              or
            </label>
            <input
              required
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
            required
            onChange={onChange}
            name='duration'
            type='number'
            minLength='0'
            value={duration}
            className='p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200 text-gray-600'
            placeholder='How many minutes'
          />
        </div>

        <div className='flex-col flex py-3'>
          <label className='pb-2 text-gray-700 font-semibold'>Date:</label>
          <DatePicker
            required={true}
            selected={date}
            onChange={onDateChange}
            name='date'
            className='p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200 text-gray-600 text-center'
            placeholder={date}
            placeholderText={date}
          />
        </div>

        <div className='mt-2'>
          <button
            className='rounded-lg p-3 bg-indigo-400 text-white w-full hover:bg-indigo-300'
            type='submit'>
            UPDATE EXERCISE
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditExercise;
