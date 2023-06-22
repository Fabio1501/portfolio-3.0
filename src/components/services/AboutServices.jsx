import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";

import cleanCode from '../../assets/services - clean-code.png'
import modernDesign from '../../assets/services - modern-design.png'
// import avatar from '../../assets/avatar-fabidev.png'
import avatar from "../../assets/FabiDEV sin fondo2.png"
import {BsLightningFill} from 'react-icons/bs'
import {FaRegHandshake} from 'react-icons/fa'
import {TbBulb} from 'react-icons/tb'
import {MdOutlineCleaningServices} from 'react-icons/md'


const AboutServices = () => {

    const [t, i18n] = useTranslation("services")

    return (
        <div className="w-full">
            <div className="max-w-[1280px] flex flex-col lg:flex-row items-center justify-between gap-x-12 lg:py-12 px-8 lg:px-24 mx-auto">
                    <div className="relative hidden w-full lg:w-1/2 text-white font-semibold lg:flex flex-col rounded-b-full">
                        <LazyLoadImage src={avatar} alt="Me" className="w-11/12 me"/>
                        <div className='absolute h-44 w-full bg-gradient-to-t from-black bottom-0 left-0 z-10'></div>
                        <BsLightningFill className="text-7xl text-green-700 absolute top-10"></BsLightningFill>    
                        <FaRegHandshake className="absolute top-10 right-12 text-7xl text-green-700"></FaRegHandshake>
                        <MdOutlineCleaningServices className="absolute -top-[100px] left-[70px] text-7xl text-green-700"></MdOutlineCleaningServices>
                        <TbBulb className="absolute -top-[100px] left-1/2  text-7xl text-green-700"></TbBulb>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-y-4 w-full lg:w-3/4 gap-x-4">
                        <div className="w-full flex flex-col items-start text-white gap-y-4">
                            <span className="text-sm text-green-300 lg:mb-4 md:text-xl font-normal">{t("aboutus.subtitle")}</span>
                            <h1 className="xl:text-4xl text-xl md:text-5xl">{t("aboutus.title")}</h1>
                            <div className="h-[4px] lg:h-2 bg-green-600 w-1/4 lg:w-1/5 lg:mt-4"></div>
                            {/* <div className="w-full mt-6 font-normal ">
                                <p>{t("aboutus.paragraph")}</p>
                            </div> */}
                            <div className="flex flex-col lg:flex-row items-center gap-y-8 lg:gap-x-8 mt-8">
                                <div className="w-full lg:w-1/2 flex items-start justify-between gap-x-4">
                                    <LazyLoadImage src={cleanCode} alt="cleanCode" />
                                    <div>
                                        <h3 className="font-bold text-2xl">{t("aboutus.serviceTitle1")}</h3>
                                        <p className="mt-4">{t("aboutus.servicePragraph1")}</p>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 flex items-start justify-between gap-x-4">
                                    <LazyLoadImage src={modernDesign} alt="modernDesign" />
                                    <div>
                                        <h3 className="font-bold text-2xl">{t("aboutus.serviceTitle2")}</h3>
                                        <p className="mt-4">{t("aboutus.servicePragraph2")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default AboutServices;
