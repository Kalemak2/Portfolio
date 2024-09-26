import React from 'react';

const Project = () => {
  return (
    <div className='space-y-6 p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg'>
      
      <div className='text-center'>
        <h2 className='text-2xl font-bold tracking-wider text-gray-800'>
          01 / TRAILY
        </h2>
      </div>

      <div className='space-y-4 text-center'>
        <p className='text-lg font-medium text-gray-700'>
          Traily to innowacyjna platforma stworzona z myślą o uproszczeniu procesu tworzenia i zarządzania egzaminami.
        </p>
        <p className='text-sm font-light text-gray-500'>
          Zbudowany z wykorzystaniem: React i Tailwind CSS
        </p>
      </div>

      <div className='md:w-2/3 mx-auto'>
        <img className='w-full rounded-md shadow-md' src="./assets/traily.png" alt="Traily" />
      </div>

      <div className='text-center mt-6'>
        <a href='#' className='text-blue-500 hover:text-blue-700 underline font-medium'>
          Więcej zdjęć z tego projektu
        </a>
      </div>
    </div>
  );
};

export default Project;
