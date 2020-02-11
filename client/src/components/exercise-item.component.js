import React, { Fragment, useState } from 'react';
import Moment from 'react-moment';
import EditButton from './layout/buttons/edit-button';
import DeleteButton from './layout/buttons/delete-button';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const modalCustomStyles = {};

const ExerciseItem = ({ idx, exercise, deleteExercise }) => {
  Modal.setAppElement(document.getElementById('root'));

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => setModalIsOpen(false);
  function afterOpenModal() {}

  const cellStyles = 'sm:p-2 sm:px-5 text-gray-700 text-xs sm:text-sm';

  return (
    <Fragment>
      <tr
        onTouchStart={() => setModalIsOpen(true)}
        key={idx}
        className={`hover:border-b hover:bg-blue-100 hover:shadow border ${
          idx % 2 === 0 ? 'bg-gray-100' : ''
        }`}>
        <td className={`${cellStyles}`}>{exercise.username}</td>
        <td className={`${cellStyles}`}>{exercise.description}</td>
        <td className={`${cellStyles}`}>{exercise.duration} min</td>
        <td className={`${cellStyles}`}>
          <Moment format='MM/DD/YYYY'>{exercise.date}</Moment>
        </td>
        <td className={`hidden sm:table-cell ${cellStyles} text-center`}>
          <div className='w-full table-cell'>
            <EditButton exercise={exercise} />
          </div>
          <div className='w-full table-cell'>
            <DeleteButton exercise={exercise} deleteExercise={deleteExercise} />
          </div>
        </td>
      </tr>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        style={modalCustomStyles}
        className='flex bg-gray-800 w-full h-full  justify-center items-center'>
        <div className='w-11/12 bg-white rounded-lg overflow-hidden'>
          <div className=' lg:flex shadow rounded-lg border  border-gray-400'>
            <div className='bg-red-500 rounded-lg lg:w-2/12 py-4 block h-full shadow-inner'>
              <button
                className='flex text-red-100 ml-auto mr-2 -mt-3'
                onClick={closeModal}>
                x
              </button>
              <div className='text-center tracking-wide'>
                <div className='text-white font-normal text-2xl'>
                  <span className='text-red-200 text-xl'>user: </span>
                  {exercise.username}
                </div>
              </div>
            </div>
            <div className='w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide'>
              <div className='flex flex-row lg:justify-start justify-center'>
                <div className='text-gray-700 font-medium text-sm text-center lg:text-left px-2'>
                  <Moment format='LL'>{exercise.date}</Moment>
                </div>
              </div>
              <div className='font-semibold text-gray-800 text-xl text-center lg:text-left px-2'>
                {exercise.description}
              </div>
              <div className='font-semibold text-gray-600 text-center lg:text-left px-2'>
                {exercise.duration} minutes
              </div>
            </div>
            <div className='flex flex-row justify-around mb-4'>
              <button className='w-1/3 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 md:pl-2 sm:pr-0 rounded-lg focus:outline-none focus:shadow-outline'>
                <Link to={`/edit/${exercise._id}`} className='inline-flex'>
                  <span>edit</span>
                </Link>
              </button>
              <button
                onClick={() => deleteExercise(exercise._id)}
                className='w-1/3 bg-red-500 hover:bg-red-700 text-white py-1 px-2 md:pl-2 sm:pr-0 rounded-lg focus:outline-none focus:shadow-outline'>
                <span>delete</span>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default ExerciseItem;
