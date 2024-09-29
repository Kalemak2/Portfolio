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
        <a href='https://www.istockphoto.com/pl/zbior-darmowych-zdjec?utm_medium=cpc&utm_source=GOOGLE&utm_campaign=PL_Tail_Photo_EN_DSA&utm_content=Photo_Free_DSA&utm_term=DYNAMIC+SEARCH+ADS&program=free-trial&ds_rl=1261606&ds_rl=1265190&ds_rl=1265190&gad_source=1&gclid=CjwKCAjw9eO3BhBNEiwAoc0-jVtUZSOXl55ri9I53jEJNP-e0w7A5Q2c2Awd1WgPoofvo74RECKkShoC2IoQAvD_BwE&gclsrc=aw.ds' className='text-blue-500 hover:text-blue-700 underline font-medium'>
          Więcej zdjęć z tego projektu
        </a>
      </div>
    </div>
  );
};

export default Project;
