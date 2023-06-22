import React from 'react';

const NavMobile = ({ menu, setMenu }) => {
  return (
    <button
      className='relative block lg:hidden z-20'
      onClick={() => setMenu(!menu)}>
      <div className='relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all'>
        <div className='flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden'>
          <div
            className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
              menu && 'translate-x-10'
            }`}
          />
          <div
            className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${
              menu && 'translate-x-10'
            } delay-75`}
          />
          <div
            className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left delay-150 ${
              menu && 'translate-x-10'
            }`}
          />
          <div
            className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0 ${
              menu && 'translate-x-0 w-12'
            }`}>
            <div
              className={`absolute bg-white h-[2px] w-6 transform transition-all duration-500 rotate-0 delay-300 ${
                menu && 'rotate-[55deg]'
              }`}
            />
            <div
              className={`absolute bg-white h-[2px] w-6 transform transition-all duration-500 -rotate-0 delay-300 ${
                menu && '-rotate-[55deg]'
              }`}></div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default NavMobile;
