import React from 'react';

const About = () => {
  return (
    <div>
      <div className='md:flex border-b-2 border-zinc-400 pb-12'>
        <div className='md:w-2/3 md:pr-10'>
          <div>
            <span className='text-3xl md:text-6xl font-semibold'>
              Cześć, jestem Kornel Pakulski, frontend developer.
            </span>
          </div>
          <div className='pt-10'>
            <span className='text-2xl md:text-3xl text-zinc-400'>
              Specjalizuję się w tworzeniu aplikacji webowych z wykorzystaniem technologii takich jak React i Tailwind CSS. Moje projekty charakteryzują się czytelnym kodem, wysoką wydajnością oraz responsywnością. 

              Obecnie pracuję jako freelancer i jestem otwarty na ciekawe propozycje współpracy oraz oferty stażu.
            </span>
          </div>
          <div className='pt-20'>
            <div className='space-y-8'>
              <div className='space-y-2'>
                <span className='font-medium underline'>Main Software</span>
                <div className='flex justify-between'>
                  <span className='text-zinc-500'>Visual Studio Code, Figma, Git, Chrome DevTools</span>
                </div>
              </div>
              <div className='space-y-2'>
                <span className='font-medium underline'>Main Skills</span>
                <div className='flex justify-between'>
                  <span className='text-zinc-500'>HTML, CSS, JavaScript, React, Tailwind CSS, Git, Responsive Design, API Integration</span>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className='w-full md:h-1/3 pt-5 md:pt-0'>
          <img src="./assets/photo-profile.png" alt="Kornel Pakulski" />
        </div>
      </div>
      <div className='md:flex justify-between py-10 space-y-10 md:space-y-0'>
        <div>
          <span className='text-2xl'>Z przyjemnością odpowiem na Twoje pytania dotyczące współpracy</span>
        </div>
        <div>
          <span className='text-2xl underline text-zinc-400'>kornelpakulski@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default About;
