import React, { useState } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import {FaReact} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'
import {BsBoxArrowUpRight} from 'react-icons/bs'
import {TbBrandCss3} from 'react-icons/tb'
import {SiPrisma} from 'react-icons/si'
import {SiHtml5} from 'react-icons/si'
import {ImMobile} from 'react-icons/im'

import {AiOutlineSplitCells} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {BsFillGearFill} from 'react-icons/bs'
import {BsFillPersonFill} from 'react-icons/bs'

import neuronaHome from "../../assets/projects/neurona/neurona-home.png"

function Card({slides, techs, title, date, description, urls, mobileImages, mobile}) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hiddenMobile, setHiddenMobile] = useState(true);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='w-full flex flex-col xl:w-[45%] text-white gap-y-8  rounded-t-2xl'>
        <div className='h-full w-full m-auto relative group rounded-t-2xl'>
            <div
            className='w-full h-full rounded-t-2xl bg-center bg-cover duration-500'>
                <LazyLoadImage src={`${slides ? slides[currentIndex]?.url : neuronaHome}`} alt="ups hubo un error" className='w-full rounded-t-2xl h-[150px] md:h-auto xl:h-[240px]'/>
            </div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-6 text-md xl:text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide}  />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-6 text-md xl:text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide}  />
            </div>
            <div className='hidden group-hover:flex items-center w-fit bg-black/50 rounded-full px-2 xl:px-4 m-auto justify-center py-1 xl:py-2 absolute bottom-2 right-1/2 translate-x-1/2'>
                {slides?.map((slide, slideIndex) => (
                <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className='text-md xl:text-2xl cursor-pointer text-white'
                >
                    <RxDotFilled className={`${slideIndex === currentIndex ? 'text-xl xl:text-4xl' : ''}`}/>
                </div>
                ))}
            </div>
        </div>
        <div className='flex flex-col gap-y-4 xl:gap-y-8 px-6   bg-gradient-to-t from-white/5 pb-6 rounded-b-2xl'>
            <div className='flex items-center justify-between'>
                <div>
                    <h3 className='text-lg xl:text-2xl font-bold'>{title}</h3>
                    <span className='text-sm xl:text-lg'>{date}</span>
                </div>
                {
                    mobile ? <button 
                    onClick={() => setHiddenMobile(false)}
                    className='hidden md:block p-3 bg-white/5 rounded-lg hover:bg-white/10 cursor-pointer'>
                        <ImMobile className='text-lg xl:text-2xl'></ImMobile>
                    </button> : ''
                }
            </div>
            <hr className='opacity-30'/>
            <div className='flex items-center justify-between -my-2'>
                {
                    techs.map((tech) => {
                        return(
                            <div className='text-xl xl:text-3xl flex flex-col items-center opacity-60'>
                                {tech.icon == 'FaReact' ? <FaReact className=' text-gray-300'></FaReact> : tech.icon == 'SiTailwindcss' ? <SiTailwindcss className=' text-gray-300'></SiTailwindcss> : tech.icon == 'FaNodeJs' ? <FaNodeJs className=' text-gray-300'></FaNodeJs> : tech.icon == 'SiMongodb' ? <SiMongodb className=' text-gray-300'></SiMongodb> : tech.icon == 'SiExpress' ? <SiExpress className=' text-gray-300'></SiExpress> : tech.icon == 'SiJavascript' ? <SiJavascript className=' text-gray-300'></SiJavascript> : tech.icon == 'SiPostgresql' ? <SiPostgresql className=' text-gray-300'></SiPostgresql> : tech.icon == 'TbBrandCss3' ? <TbBrandCss3 className=' text-gray-300'></TbBrandCss3> : tech.icon == 'SiPrisma' ? <SiPrisma className=' text-gray-300'></SiPrisma> : tech.icon == 'SiHtml5' ? <SiHtml5 className=' text-gray-300'></SiHtml5> : ''}
                                <span className='hidden md:block text-sm xl:text-xl text-gray-300 font-semibold'>{tech.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <hr className='opacity-30'/>
            <p className='text-gray-400 text-sm xl:text-lg'>{description}</p>
            <div className='flex items-center gap-x-2 xl:gap-x-4'>
                <a href={urls.deploy} target='_blank' 
                className='flex items-center justify-between px-4 xl:px-6 py-2 xl:py-3 gap-x-2 text-sm xl:text-xl bg-green-700 border-green-700 border-2 hover:bg-green-600 hover:cursor-pointer font-semibold rounded-xl'>
                    <span >Ver OnLine</span>
                    <BsBoxArrowUpRight></BsBoxArrowUpRight>
                </a>
                <a href={urls.repository} target='_blank' 
                className='flex items-center justify-between px-4 xl:px-6 py-2 xl:py-3 gap-x-2 text-sm xl:text-xl border-green-600 border-2 rounded-xl hover:cursor-pointer hover:bg-white/5'>
                    <span >Ver Repo</span>
                    <BsGithub></BsGithub>
                </a>
            </div>
        </div>
        <div 
        onClick={() => setHiddenMobile(true)}
        className={`${hiddenMobile ? 'hidden' : 'fixed'} w-full h-full flex items-center justify-center top-0 left-0 z-10 p-4 overflow-x-hidden overflow-y-auto md:inset-0 backdrop-blur-sm bg-black/20`}>
            <div className="scroll-dark overflow-x-hidden overflow-y-auto relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[608px] w-[388px] shadow-xl">
                <div className='camera w-44 h-44 pt-0 bg-gray-800 rounded-full fixed top-[230px] xl:top-[32px] left-1/2 -translate-x-1/2 '></div>
                
                <div className="rounded-[2rem] w-[360px]">
                    {
                        mobileImages.map((img, index) => <LazyLoadImage src={img} key={index++} className="-mt-4 block w-[360px] h-[572px]" alt=""/>)
                    }
                </div>
                <div className='sticky -bottom-2 py-4 px-6 left-0 bg-gray-800 flex justify-between items-center w-full text-3xl'>
                    <AiFillHome></AiFillHome>
                    <AiOutlineSplitCells></AiOutlineSplitCells>
                    <BsFillGearFill></BsFillGearFill>
                    <BsFillPersonFill></BsFillPersonFill>
                </div>
            </div>
            
        </div>
    </div>
  );
}

export default Card;
