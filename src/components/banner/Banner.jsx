import CountDown from "./CountDown";
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsCalendarHeart} from 'react-icons/bs'
import {MdOutgoingMail} from 'react-icons/md'

export default function Banner() {
  return (
    <div className="flex flex-col justify-between items-start w-full px-8 lg:px-24 py-8 lg:flex-row text-white m-auto max-w-[1280px] ">
      <div className="mb-4 lg:mb-0 lg:mr-4">
        <div className="mb-4 gap-y-4 lg:mb-0 lg:gap-y-0 flex flex-col items-start lg:flex-row lg:items-center lg:justify-between lg:gap-x-12">
          <h2 className="mb-2 text-3xl font-semibold">Bienvenido a mi portfolio</h2>
          <div className="flex items-center justify-center gap-x-4">
            <a href="https://mail.google.com/mail/?view=cm&to=fabiuuu8@gmail.com" target="_blank"><MdOutgoingMail className="hover:scale-110 text-white text-4xl"></MdOutgoingMail></a>
            <a href="https://calendly.com/fabiancarabajal" target="_blank"><BsCalendarHeart className="hover:scale-110 text-white text-2xl"></BsCalendarHeart></a>
            <a href="https://www.linkedin.com/in/fabian1501/" target="_blank"><BsLinkedin className="hover:scale-110 text-white text-2xl"></BsLinkedin></a>
            <a href="https://github.com/Fabio1501" target="_blank"><BsGithub className="hover:scale-110 text-white text-2xl"></BsGithub></a>
          </div>
        </div>
        <p className="xl:text-sm flex items-center text-lg font-normal text-gray-400">Como verás, ahora mismo está siendo desarrollado, mientras tanto puedes contactarme en mis redes profesionales, te deseo un lindo día.</p>
      </div>
      <CountDown></CountDown>
    </div>
  )
}
