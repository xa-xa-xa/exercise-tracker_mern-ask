import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import ExerciseItem from './exercise-item.component';
import axios from 'axios';

const ExercisesList = () => {
  // const [exerciseItem, setExerciseItem] = useState();
  const [loading, setLoading] = useState(true);
  const [exercises, setExercises] = useState([]);
  // const [remove, setRemove] = useState(false);
  // const [edit, setEdit] = useState(false);

  const getExercises = async => {
    console.log('getting from server...');
    axios
      .get('http://localhost:5000/exercises/')
      .then(async res => {
        if (res.data) {
          setExercises(res.data);
          setLoading(false);
        }
      })
      .catch(err => console.log(err));
  };

  const deleteExercise = id => {
    axios.delete('http://localhost:5000/exercises/' + id).then(res => {
      if (res.status === 200) {
        setExercises(exercises.filter(item => item._id !== id));
      }
    });
  };

  useEffect(() => {
    getExercises();
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <div className='text-gray-900 bg-gray-300 md:w-10/12 rounded-lg m-auto sm:my-2 my-px'>
      <h1 className='text-3xl text-center sm:pt-4 sm:pb-2 p-1'>
        Exercises List
      </h1>
      <div className='flex justify-center text-center'>
        <div className='overflow-hidden mb-4 rounded-lg sm:mx-3 mx-0 shadow-md w-full sm:mx-2 mx-1'>
          <table className='w-full sm:text-md text-sm bg-white '>
            <tbody className='justify-center'>
              <tr className='border-b  bg-gray-400 '>
                <th className='sm:p-3 p-1 sm:px-5'>User</th>
                <th className='sm:p-3 p-1 px-5'>Description</th>
                <th className='sm:p-3 p-1 sm:px-5'>Duration</th>
                <th className='sm:p-3 p-1 sm:px-5'>Date</th>
                <th className='sm:p-3 p-1 sm:px-5'>Actions</th>
              </tr>
              {loading || !exercises.length ? (
                <tr className=''>
                  <td></td>
                  <td className='flex'>
                    Nothing here yet... try to ad an exercise
                  </td>
                </tr>
              ) : (
                exercises.map((item, idx) => (
                  <ExerciseItem
                    exercise={item}
                    deleteExercise={deleteExercise}
                    key={item._id}
                    idx={idx}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExercisesList;
