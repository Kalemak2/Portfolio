import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='md:flex justify-between items-center py-5'>
      <div>
        <span className='text-4xl font-medium'>kp.</span>
      </div>
      <div>
        <div className='pt-20 md:pt-0 md:flex space-x-6'>
          {/* Link do sekcji "Projekty" */}
          <Link to="/">
            <div className='buttons flex items-center space-x-2'>
              <span className='font-medium'>Projekty</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-marked">
                <path d="M10 2v8l3-3 3 3V2" />
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
              </svg>
            </div>
          </Link>
          {/* Link do sekcji "O mnie" */}
          <Link to="/about">
            <div className='buttons flex items-center space-x-2'>
              <span className='font-medium'>O mnie</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
