import { useState } from 'react'
import logo from '../../assets/portfolio - imagen logo header.png'
import { send } from "emailjs-com"
import Alert from '../contact/Alert';
import { useTranslation } from "react-i18next";

import {BsLinkedin} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTiktok} from 'react-icons/bs'
import {BsCalendarHeart} from 'react-icons/bs'
import {MdOutgoingMail} from 'react-icons/md'

const Footer = () => {
   
    const [subscribe, setSubscribe] = useState('')
    const [isHidden, setIsHidden] = useState(true)
    const [isSuccess, setIsSuccess] = useState(false)
    const [t, i18n] = useTranslation("home")

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await send(
              "service_cwwtt6a",
              'template_rf4nwto',
              {reply_to: subscribe}, 
              "h0qPCEPUOQCAODry3"
            )
      
            setIsHidden(false)
            setIsSuccess(true)
            setSubscribe('')
          } catch (error) {
            setIsHidden(false)
            setIsSuccess(false)
          } finally {
            setTimeout(() => {
              setIsHidden(true)
            }, 10000);
          }
    } 

    const handleChange = (e) => {
        setSubscribe(e.target.value)
    }

    return(
        <footer className="max-w-[1280px] mx-auto px-6  lg:px-24">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="flex flex-col items-center gap-y-8 md:flex-row gap-x-6 justify-between">
                    <div className="mb-6 md:mb-0 flex flex-col gap-y-10">
                        <a href="https://fabidev.vercel.app" className="flex items-center">
                            <img src={logo} className="h-8 mr-3" alt="FabiDev Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FabiDev</span>
                        </a>
                        <form 
                            onSubmit={handleSubmit}
                            className="flex items-center w-full max-w-md mb-3">
                            <div className="relative w-full mr-3">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                </div>
                                <input 
                                id="member_email" 
                                className="formkit-input bg-white/10 border border-gray-800 text-gray-300 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full pl-10 px-5 py-3" 
                                name="subscribe" 
                                aria-label="Email Address" placeholder={t("footer.placeholder")} required onChange={handleChange} value={subscribe} type="email"/>
                            </div>
                            <button className="formkit-submit">
                                <span className="px-5 py-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg cursor-pointer border border-green-600 hover:bg-green-600 focus:ring-4">{t("footer.btn")}</span>
                            </button>
                        </form>
                    </div>
                    <div className="flex items-center gap-x-6 xl:gap-x-32">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{t("footer.follow")}</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://www.youtube.com/@FabiDev9" className="hover:underline ">YouTube</a>
                                </li>
                                <li>
                                    <a href="https://tiktok.com/@fabidev6" className="hover:underline">TikTok</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{t("footer.contact")}</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://mail.google.com/mail/?view=cm&to=fabiuuu8@gmail.com" className="hover:underline">Email</a>
                                </li>
                                <li>
                                    <a href="https://calendly.com/fabiancarabajal" className="hover:underline">CalendLy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="flex flex-col gap-y-4 md:flex-row items-center justify-between">
                    <span className="text-sm text-center text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://fabidev.vercel.app" className="hover:underline">FabiDev™</a>. <br className='md:hidden'/> {t("footer.rights")}
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 text-xl">
                        <a href="https://www.linkedin.com/in/fabian1501/" target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <BsLinkedin></BsLinkedin>
                        </a>
                        <a href="https://github.com/Fabio1501" target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <BsGithub></BsGithub>
                        </a>
                        <a href="https://calendly.com/fabiancarabajal" target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <BsCalendarHeart></BsCalendarHeart>
                        </a>
                        <a href="https://www.instagram.com/fabidev.ok/" target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <BsInstagram></BsInstagram>
                        </a>
                        <a href="https://www.youtube.com/@FabiDev9" target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <BsYoutube></BsYoutube>
                        </a>
                        <a href="https://tiktok.com/@fabidev6" target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <BsTiktok></BsTiktok>
                        </a>
                    </div>
                </div>
            </div>
            <Alert isSuccess={isSuccess} isHidden={isHidden} setIsHidden = {setIsHidden} titleSuccess={`¡Muchas gracias por suscribirte!`} titleError={`Algo salió mal, vuelve a intentarlo!`} textSuccess={`Hola! Revisa tu casilla de correo.`} textError={`Lo siento, puedes volver a intentarlo en segundos.`}/>
        </footer>
    )
}

export default Footer;
