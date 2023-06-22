import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import {AiOutlineEye} from 'react-icons/ai'

import branding from '../../assets/services - branding.png'
import webDesign from '../../assets/services - web-design.png'
import apiRest from '../../assets/services - apirest.png'
import integrations from '../../assets/services - integration.png'
import { Link } from "react-router-dom";

const Services = () => {
    
    const [t, i18n] = useTranslation("services")
    // const gsapService1 = useRef(null);
    
    // gsap.registerPlugin(ScrollTrigger);
    // useEffect(() => {
    //     // gsap.set("#service1", { opacity: 0 });
    //     gsap.to("#service1", {
    //         opacity: 1,
    //         duration: 1,
    //         scrollTrigger: {
    //             trigger: "#service1",
    //             start: "top 80%", // Change opacity when element is 80% in view
    //             end: "bottom 20%", // Change opacity when element is 20% out of view
    //             toggleActions: "play none none reverse", // Play animation when element enters view, reverse when it leaves
    //         },
    //     });
    // }, [])

    return(
        <div className="max-w-[1280px] w-full m-auto py-12 px-8 lg:px-24 md:py-12">
            <div className="mb-12 flex flex-col lg:flex-row items-center justify-between gap-x-12 gap-y-8">
                <div className="w-full lg:w-1/2 text-white font-semibold flex flex-col">
                    <span className="text-sm text-green-300 mb-4 md:text-xl font-normal">{t("services.subtitle")}</span>
                    <h1 className="xl:text-4xl text-xl md:text-5xl">{t("services.title")}<b className="font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-400 to-green-600">{t("services.title2")}</b></h1>
                    <div className="h-[4px] lg:h-2 bg-green-600 w-1/4 lg:w-1/5 mt-4"></div>
                    <div className="w-full mt-6 font-normal ">
                        <p>{t("services.paragraph")}</p>
                    </div>
                    <Link to={`/projects`} className="flex justify-center items-center gap-x-2 text-center px-3 py-2 hover:bg-green-600  text-white font-semibold md:px-8 md:py-3 bg-green-700 lg:w-fit mt-12">
                        <span className="text-lg md:text-2xl">{t("services.btn")}</span>
                        <AiOutlineEye className="text-2xl font-bold"></AiOutlineEye>
                    </Link>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-y-4 w-full lg:w-1/2 gap-x-4">
                    <div className="w-full flex flex-col items-center text-white text-center gap-y-4">
                        <div id="service1" className="flex flex-col items-center p-4 bg-white/5">
                            <img src={webDesign} alt="branding" />
                            <h3 className="font-bold text-2xl">{t("services.serviceTitle1")}</h3>
                            <p className="mt-4">{t("services.servicePragraph1")}</p>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-gradient-to-b from-white/5 to-green-600/10">
                            <img src={branding} alt="webDesign" />
                            <h3 className="font-bold text-2xl">{t("services.serviceTitle2")}</h3>
                            <p className="mt-4">{t("services.servicePragraph2")}</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center text-white text-center gap-y-4">
                        <div id="service2" className="flex flex-col items-center p-4 bg-gradient-to-b from-white/5 to-green-600/10">
                            <img src={apiRest} alt="" />
                            <h3 className="font-bold text-2xl">{t("services.serviceTitle3")}</h3>
                            <p className="mt-4">{t("services.servicePragraph3")}</p>
                            
                        </div>
                        <div className="flex flex-col items-center p-4 bg-white/5">
                            <img src={integrations} alt="" />
                            <h3 className="font-bold text-2xl">{t("services.serviceTitle4")}</h3>
                            <p className="mt-4">{t("services.servicePragraph4")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services; 
