import React from 'react';
import Project from '../project/Project';

const Home = () => {
  return (
    <div className='space-y-20 border-b-2 border-zinc-400 pb-12'>
      <div>
        <div className='md:flex justify-between space-x-6 pr-24'>
          <div className='mb-10'>
            <span className='text-4xl md:text-6xl font-medium'>Cześć, jestem Kornel Pakulski.</span>
          </div>
          <div className='md:flex md:items-end'>
            <span className='text-2xl md:text-3xl text-zinc-400'>
            Jako frontendowy programista specjalizuję się w budowaniu dynamicznych i skalowalnych aplikacji webowych z wykorzystaniem Reacta i Tailwind CSS. Moje podejście do kodowania koncentruje się na tworzeniu komponentów o wysokiej wydajności, które są zarówno intuicyjne w użyciu, jak i zoptymalizowane pod kątem responsywności oraz doświadczenia użytkownika.
            </span>
          </div>
        </div>
        <div className='pt-10'></div>
      </div>
      <Project />
    </div>
  );
};

export default Home;
