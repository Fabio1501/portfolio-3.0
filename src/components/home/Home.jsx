import { useState } from "react";
import Banner from "../banner/Banner";
import Modal from "./Modal";

import { HiOutlinePlay } from 'react-icons/hi';
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {FaHtml5} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'

import fabiDev from "../../assets/fabiDev sin fondo.png"


export default function Home() {

  const [aboutUs, setAboutUs] = useState(false);

  const handleAboutUs = () => {
    setAboutUs(true)
  } 

  return (
    <div className={`h-full flex flex-col w-full min-h-screen overflow-hidden bg-gradient-to-r from-green-100/5 to-green-400/10`}>
      <Banner></Banner>
      <div className="max-w-[1280px] px-8 py-6 m-auto lg:py-12 lg:px-24 flex flex-col lg:flex-row items-center justify-center lg:gap-x-32 min-h-screen h-full">
        <div className="flex flex-col lg:w-1/2 gap-y-12">
          <div className="text-white font-semibold flex flex-col">
            <span className="text-sm text-green-300 mb-4 md:text-xl font-normal">Full Stack Developer</span>
            <h1 className="xl:text-4xl text-xl md:text-5xl">Desarrollando soluciones <b className="font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-400 to-green-600">inteligentes,</b> construyendo relaciones <b className="font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-400 to-green-600">cercanas</b></h1>
            <div className="h-[4px] lg:h-2 bg-green-600 w-1/4 lg:w-1/5 mt-4"></div>
            <div className="w-full mt-6 font-normal ">
              <p>Hey! Como estás? Te cuento sobre mi brevemente, soy desarrollador web full stack MERN/PERN. Soy una persona muy constante, me gusta trabajar en equipo y forjar relaciones sanas. Pongo a la persona que está detrás del profesional por encima de todo y destaco mucho los valores, la ética y la moral del de a lado.</p>
            </div>
          </div >
          <div className="self-start flex items-center justify-between gap-x-12 lg:justify-center lg:gap-x-8">
            <div className="flex gap-x-4 items-center w-1/2">
              <button onClick={handleAboutUs} className="rounded-full bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:bg-gradient-to-r hover:from-green-700 hover:via-green-600 hover:to-green-700">
                <HiOutlinePlay className="w-10 h-10 md:w-16 md:h-16 "></HiOutlinePlay>
              </button>
              <div className="text-white">
                <h2 className="text-sm font-bold lg:text-2xl md:font-semibold">SOBRE MI</h2>
                <span className="text-sm lg:text-base">Conóceme</span>
              </div>
            </div>
            <a href="https://mail.google.com/mail/?view=cm&to=fabiuuu8@gmail.com" target="_blank" className="text-center text-lg px-3 py-2 w-1/2 bg-gradient-to-r from-green-600 via-green-500 to-green-600 rounded-3xl text-white font-semibold md:text-2xl md:px-8 md:py-3 hover:bg-gradient-to-r hover:from-green-700 hover:via-green-600 hover:to-green-700">Contactame</a>
          </div>
        </div>
        <div className="hidden md:block mt-8 lg:mt-0 w-full lg:w-1/2 relative">
            <FaReact className="xl:top-10 xl:left-0 absolute z-10 top-20 left-20 text-8xl text-green-600"></FaReact>
            <FaNodeJs className="xl:top-10 xl:right-0 absolute z-10 top-20 right-20 text-8xl text-green-600"></FaNodeJs>
            <FaHtml5 className="absolute xl:-left-10 z-10 bottom-10 left-10 text-8xl text-green-600"></FaHtml5>
            <SiTailwindcss className="xl:top-100 xl:-right-10 absolute z-10 top-56 right-10 text-8xl text-green-600"></SiTailwindcss>
            <img src={fabiDev} alt="" className=" m-auto rounded-r-full rounded-t-full bg-green-200/5 p-6 border-green-600 border-2"/>
        </div>
      </div>
      <Modal aboutUs = {aboutUs} setAboutUs = {setAboutUs}></Modal>
    </div>
  )
}
