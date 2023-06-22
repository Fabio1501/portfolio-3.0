import React, {useState} from 'react';
import { send } from "emailjs-com"
import { useTranslation } from "react-i18next";

import { HiArrowUpRight } from 'react-icons/hi2';
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsCalendarHeart} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {MdOutgoingMail} from 'react-icons/md'

import Alert from './Alert';


const Contact = () => {
  const [objEmail, setObjEmail] = useState({
    name: '',
    email: '',
    subject : '',
    message: ''
  })
  const [t, i18n] = useTranslation("projects")

  const [errors, setErrors] = useState({});
  const [isHidden, setIsHidden] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)

  function validationErrors(objEmail){
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!objEmail.name.length) {
      errors.name = 'Por favor ingresa tu nombre.'   
    }   
    
    if (!objEmail.email.length) {
      errors.email = 'Por favor ingresa tu email.'   
    } 

    if(!regex.test(objEmail.email)){
      errors.email = 'Por favor ingresa un email válido.'   
    }

    if (!objEmail.subject.length) {
      errors.subject = 'Por favor ingresa el asunto del mensaje.'   
    } 

    if (!objEmail.message.length || objEmail.message.length < 3) {
      errors.message = 'El texto debe tener al menos 4 caracteres.'   
    } 


    return errors;
  }

  function handleChange(e){
    setObjEmail({...objEmail, [e.target.name] : e.target.value})
    setErrors(validationErrors({...objEmail, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const templateParams = {
      from_name:  objEmail.name,
      user_email: objEmail.email,
      subject:    objEmail.subject,
      message:    objEmail.message
    };

    // const responseEmailJs = await send(
    //   process.env.REACT_APP_SERVICE_ID,
    //   process.env.REACT_APP_TEMPLATE_ID, 
    //   templateParams, 
    //   process.env.REACT_APP_PUBLIC_KEY
    // )
    try {
      let publica = import.meta.env.VITE_SERVICE_ID
      console.log(publica);

      await send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE1_ID,
        templateParams, 
        import.meta.env.VITE_PUBLIC_KEY
      )

      setIsHidden(false)
      setIsSuccess(true)
      setObjEmail({
        name: '',
        email: '',
        subject : '',
        message: ''
      })
    } catch (error) {
      console.log(error);
      setIsHidden(false)
      setIsSuccess(false)
    } finally {
      setTimeout(() => {
        setIsHidden(true)
      }, 10000);
    }
  };

  return (
    <main 
    id='contact'
    className='bg-gradient-to-r from-white/5 to-green-600/5 w-full flex flex-col gap-y-24 py-24 items-center justify-center m-auto'>
      <div className='flex flex-col xl:flex-row justify-between items-start w-full gap-y-12 gap-x-8 m-auto max-w-[1280px] px-6 md:px-12 xl:px-24'>
        <div className='flex flex-col gap-y-12 xl:gap-y-20'>
          <div className='self-start font-bold'>
            <span className="text-sm text-green-300 mb-4 md:text-xl font-normal">{t("contact.subtitle")}</span>
            <h1 className="text-white xl:text-4xl text-xl md:text-5xl">{t("contact.title1")}<b className="font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-400 to-green-600"> {t("contact.title2")}</b></h1>
            <div className="h-[4px] lg:h-2 bg-green-600 w-1/4 lg:w-1/5 mt-4"></div>
          </div>
          <div className='flex flex-wrap gap-x-8 xl:flex-col gap-y-4 xl:gap-y-8'>
            <a href='https://mail.google.com/mail/?view=cm&to=fabiuuu8@gmail.com' target='_blank' className='flex items-center gap-x-2 md:gap-x-8 text-white text-lg md:text-2xl'>
              <MdOutgoingMail className='text-green-700 text-2xl md:text-5xl'></MdOutgoingMail>
              <span>Gmail</span>
            </a >
            <a href='https://calendly.com/fabiancarabajal' target='_blank' className='flex items-center xl:ml-16 gap-x-2 md:gap-x-8 text-white text-lg md:text-2xl'>
              <BsCalendarHeart className='text-green-700 text-xl md:text-4xl'></BsCalendarHeart>
              <span>CalendLy</span>
            </a >
            <a href='https://www.linkedin.com/in/fabian1501/' target='_blank' className='flex items-center xl:ml-32 gap-x-2 md:gap-x-8 text-white text-lg md:text-2xl'>
              <BsLinkedin className='text-green-700 text-xl md:text-4xl'></BsLinkedin>
              <span>LinkedIn</span>
            </a >
            <a href='https://github.com/Fabio1501' target='_blank' className='flex items-center gap-x-2 md:ml-32 xl:gap-x-8 text-white text-lg md:text-2xl'>
              <BsGithub className='text-green-700 text-xl md:text-4xl'></BsGithub>
              <span>GitHub</span>
            </a >
            <a href='https://www.youtube.com/@FabiDev9' target='_blank' className='flex items-center xl:ml-16 gap-x-2 md:gap-x-8 text-white text-lg md:text-2xl'>
              <BsYoutube className='text-green-700 text-xl md:text-4xl'></BsYoutube>
              <span>YouTube</span>
            </a >
            <a href='https://www.instagram.com/fabidev.ok/' target='_blank' className='flex items-center gap-x-2 md:gap-x-8 text-white text-lg md:text-2xl'>
              <BsInstagram className='text-green-700 text-xl md:text-4xl'></BsInstagram>
              <span>Instagram</span>
            </a >
          </div>
        </div>
        <form onSubmit={handleSubmit} className='text-white px-4 xl:w-1/2 flex flex-col border-green-700 border-2 rounded-xl items-center justify-center py-6 gap-y-6'>
          <h2 className='text-2xl font-bold text-white'>{t("contact.subtitle2")}</h2>
          <span className='text-white px-4 xl:px-16 text-center mb-8'>{t("contact.paragraph")}</span>
          <input 
          name='name'
          value={objEmail.name}
          required
          onChange={handleChange}
          className='py-3 px-2 xl:px-4 w-full xl:w-3/4 rounded-lg border-2 border-green-700 bg-transparent placeholder:text-xl placeholder:text-white/70' 
          placeholder={t("contact.placeholder1")}/>
          {errors.name && <span className="text-start text-red-500 mt-1 ">{errors.name}</span>}
          <input 
          name='email'
          value={objEmail.email}
          required
          onChange={handleChange}
          className='placeholder:text-xl placeholder:text-white/70 py-3 px-2 xl:px-4 w-full xl:w-3/4 rounded-lg border-2 border-green-700 bg-transparent' 
          placeholder={t("contact.placeholder2")}/>
          {errors.email && <span className="text-start text-red-500 mt-1">{errors.email}</span>}
          <input 
          name='subject'
          value={objEmail.subject}
          required
          onChange={handleChange}
          className='placeholder:text-xl placeholder:text-white/70 py-3 px-2 xl:px-4 w-full xl:w-3/4 rounded-lg border-2 border-green-700 bg-transparent' 
          placeholder={t("contact.placeholder3")}/>
          {errors.subject && <span className="text-start text-red-500 mt-1">{errors.subject}</span>}
          <input 
          name='message'
          value={objEmail.message}
          required
          onChange={handleChange}
          className='placeholder:text-xl placeholder:text-white/70 py-3 px-2 xl:px-4 w-full xl:w-3/4 rounded-lg border-2 border-green-700 bg-transparent' 
          placeholder={t("contact.placeholder4")}/>
          {errors.message && <span className="text-start text-red-500 mt-1">{errors.message}</span>}
          <button className='flex justify-center items-center w-full xl:w-fit gap-x-2 text-xl px-6 py-2 rounded-xl text-white bg-green-700 mt-8 hover:bg-green-600'><span className=''>{t("contact.submit")}</span> <HiArrowUpRight className='font-bold'></HiArrowUpRight></button>
        </form>   
      </div>
      <Alert isSuccess={isSuccess} isHidden={isHidden} setIsHidden = {setIsHidden} titleSuccess={`¡Muchas gracias por contactarme!`} titleError={`Algo salió mal, vuelve a intentarlo!`} textSuccess={`Hola! Te estaré respondiendo a la brevedad.`} textError={`Lo siento, puedes volver a intentarlo en segundos.`}/>
    </main>
  );
};

export default Contact;
