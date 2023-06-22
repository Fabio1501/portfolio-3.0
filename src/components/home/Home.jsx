import { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
// import { LazyLoadImage } from "react-lazy-load-image-component";

import { HiOutlinePlay } from 'react-icons/hi';
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {SiPostgresql} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {BsArrowUpRight} from 'react-icons/bs'

import fabiDev from "../../assets/FabiDEV sin fondo.png"


export default function Home() {

  const [t, i18n] = useTranslation("home")
  const [aboutUs, setAboutUs] = useState(false);

  const gsapCarrer = useRef(null);
  const gsapTitle = useRef(null);
  const gsapSubrayado = useRef(null);
  const gsapParagraph = useRef(null);
  const gsapButtons = useRef(null);
  const gsapContainerImgs = useRef(null);

  const handleAboutUs = () => {
    setAboutUs(true)
  } 

  useEffect(() => {
    gsap.fromTo(gsapCarrer.current, { x: -500 }, { x: 0, duration: 1 })
    gsap.fromTo(gsapTitle.current, { x: -500 }, { x: 0, duration: 1.5 })
    gsap.fromTo(gsapSubrayado.current, { x: -500 }, { x: 0, duration: 1.5 })
    gsap.fromTo(gsapParagraph.current, { x: -500 }, { x: 0, duration: 2 })
    gsap.fromTo(gsapButtons.current, { x: -500 }, { x: 0, duration: 2 })
    gsap.fromTo(gsapContainerImgs.current, { x: 500 }, { x: 0, duration: 2 })
    gsap.to("#reactIcon", { rotate: 720, duration: 4 })
    gsap.to("#nodeIcon", { rotate: 720, duration: 4 })
    gsap.to("#postgreIcon", { rotate: 720, duration: 4 })
    gsap.to("#tailwindIcon", { rotate: 720, duration: 4 })
  }, [])

  return (
    <div className={`h-full flex flex-col w-full overflow-hidden bg-gradient-to-r from-white/5 to-green-600/5`}>
      <div className="max-w-[1280px] px-8 py-6 m-auto lg:py-12 lg:px-24 flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:gap-x-32 min-h-screen h-full">
        <div className="flex flex-col lg:w-1/2 gap-y-12">
          <div className="text-white font-semibold flex flex-col">
            <span ref={gsapCarrer} className="text-sm text-green-300 mb-4 md:text-xl font-normal">{t("home.subtitle")}</span>
            <h1 ref={gsapTitle} className="xl:text-4xl text-xl md:text-5xl">{t("home.title")}{t("home.title1")}<b className="font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-400 to-green-600">{t("home.title2")}{t("home.title3")}</b>{t("home.title4")}{t("home.title5")}<b className="font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-400 to-green-600">{t("home.title6")}{t("home.title7")}</b></h1>
            <div ref={gsapSubrayado} className="h-[4px] lg:h-2 bg-green-600 w-1/4 lg:w-1/5 mt-4"></div>
            <div ref={gsapParagraph} className="w-full mt-6 font-normal ">
              <p>{t("home.paragraph")}</p>
            </div>
          </div >
          <div ref={gsapButtons} className="self-start flex items-center justify-between gap-x-12 lg:justify-center lg:gap-x-8">
            <button 
            onClick={handleAboutUs}
            className="flex gap-x-4 items-center w-1/2">
              <button className="rounded-full bg-green-700 hover:bg-green-600">
                <HiOutlinePlay className="w-10 h-10 md:w-16 md:h-16 "></HiOutlinePlay>
              </button>
              <div className="text-white">
                <h2 className="text-sm font-bold lg:text-2xl md:font-semibold">{t("home.btnTitle1")}</h2>
                <span className="text-sm lg:text-base">{t("home.btnTitle2")}</span>
              </div>
            </button>
            <a href="https://www.docdroid.net/mrppxoe/fabian-carabajal-full-stack-developer-pdf" target="_blank" className="flex justify-between items-center gap-x-4 text-center px-3 py-2 hover:bg-green-600 text-white font-semibold md:px-8 md:py-3 bg-green-700">
              <span className="text-lg md:text-2xl">{t("home.btnTitle3")}</span>
              <BsArrowUpRight className="text-2xl"></BsArrowUpRight>
            </a>
          </div>
        </div>
        <div ref={gsapContainerImgs} className="hidden md:block mt-8 lg:mt-0 w-full lg:w-1/2 relative">
          <FaReact id="reactIcon" className="xl:top-10 xl:left-0 absolute z-10 top-20 left-20 text-8xl text-green-600"></FaReact>
          <FaNodeJs id="nodeIcon" className="xl:top-10 xl:right-0 absolute z-10 top-20 right-20 text-8xl text-green-600"></FaNodeJs>
          <SiPostgresql id="postgreIcon" className="absolute xl:-left-[45px] z-10 bottom-10 left-10 text-8xl text-green-600"></SiPostgresql>
          <SiTailwindcss id="tailwindIcon" className="xl:top-100 xl:-right-10 absolute z-10 top-56 right-10 text-8xl text-green-600"></SiTailwindcss>
          <img src={fabiDev} alt="me" className="m-auto rounded-r-full rounded-t-full bg-green-200/5 p-6 border-green-600 border-2"/>
        </div>
      </div>
      <Modal aboutUs = {aboutUs} setAboutUs = {setAboutUs}></Modal>
    </div>
  )
}
