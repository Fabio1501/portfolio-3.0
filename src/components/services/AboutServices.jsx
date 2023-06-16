import { useTranslation } from "react-i18next";

import cleanCode from '../../assets/services - clean-code.png'
import modernDesign from '../../assets/services - modern-design.png'
import avatar from '../../assets/fabidev-avatar-sinfondo.png'
const AboutServices = () => {

    const [t, i18n] = useTranslation("services")

    return (
        <div className="w-full">
            <div className="max-w-[1280px] flex flex-col lg:flex-row items-center justify-between gap-x-12 lg:py-12 px-8 lg:px-24 mx-auto">
                    <div className="hidden w-full lg:w-1/2 text-white font-semibold lg:flex flex-col">
                        <img src={avatar} alt="Me" />
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
                                    <img src={cleanCode} alt="cleanCode" />
                                    <div>
                                        <h3 className="font-bold text-2xl">{t("aboutus.serviceTitle1")}</h3>
                                        <p className="mt-4">{t("aboutus.servicePragraph1")}</p>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 flex items-start justify-between gap-x-4">
                                    <img src={modernDesign} alt="modernDesign" />
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
