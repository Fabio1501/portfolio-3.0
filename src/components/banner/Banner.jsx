import CountDown from "./CountDown";
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsCalendarHeart} from 'react-icons/bs'
import {MdOutgoingMail} from 'react-icons/md'
import logo from '../../assets/portfolio - imagen logo.png'

export default function Banner() {
  return (
    <div className="flex flex-col justify-between items-center gap-y-8 w-full px-8 lg:px-24 py-8 md:flex-row text-white m-auto max-w-[1280px] ">
      <img src={logo} className="w-32" alt="logo"/>
      <div className="flex flex-col items-center gap-y-4">
        <span className="">PROYECTO EN DESARROLLO</span>
        <CountDown></CountDown>
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <a href="https://mail.google.com/mail/?view=cm&to=fabiuuu8@gmail.com" target="_blank"><MdOutgoingMail className="hover:scale-110 text-white text-4xl"></MdOutgoingMail></a>
        <a href="https://calendly.com/fabiancarabajal" target="_blank"><BsCalendarHeart className="hover:scale-110 text-white text-2xl"></BsCalendarHeart></a>
        <a href="https://www.linkedin.com/in/fabian1501/" target="_blank"><BsLinkedin className="hover:scale-110 text-white text-2xl"></BsLinkedin></a>
        <a href="https://github.com/Fabio1501" target="_blank"><BsGithub className="hover:scale-110 text-white text-2xl"></BsGithub></a>
      </div>        
    </div>
  )
}
