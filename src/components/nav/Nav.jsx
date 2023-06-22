import React, { useState } from 'react';
import logo from '../../assets/portfolio - imagen logo.png'
import { useTranslation } from "react-i18next";
import BtnTranslation from "./BtnTranslation";
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsCalendarHeart} from 'react-icons/bs'
import {MdOutgoingMail} from 'react-icons/md'
import {AiOutlineHome} from 'react-icons/ai'
import {DiCodeBadge} from 'react-icons/di'
import {RiContactsLine} from 'react-icons/ri'
import {TbBulb} from 'react-icons/tb'

import NavMobile from './NavMobile';

import { Link } from 'react-router-dom';

const Nav = () => {

    const [t, i18n] = useTranslation("home")
    const [menu, setMenu] = useState(false);

    return(
        <header className="flex flex-row justify-between items-center gap-y-8 w-full px-8 lg:px-24 py-8 text-white m-auto max-w-[1280px]">
            <Link to='/'>
                <img src={logo} className="w-32" alt="logo"/>
            </Link>
            <nav className="lg:flex gap-x-12 hidden">
                <Link to='/' className='flex gap-x-1 items-center text-xl hover:border-b-green-600 hover:pb-2 hover:border-b-4'>
                    <AiOutlineHome></AiOutlineHome>
                    <span>{t("nav.home")}</span>
                </Link>
                <Link to='/projects' className='flex gap-x-1 items-center text-xl hover:border-b-green-600 hover:pb-2 hover:border-b-4'>
                    <DiCodeBadge></DiCodeBadge>
                    <span>{t("nav.projects")}</span>
                </Link>
                <Link to='/contact' className='flex gap-x-1 items-center text-xl hover:border-b-green-600 hover:pb-2 hover:border-b-4'>
                    <RiContactsLine></RiContactsLine>
                    <span>{t("nav.contact")}</span>
                </Link>
                <Link to='/blog' className='flex gap-x-1 items-center text-xl hover:border-b-green-600 hover:pb-2 hover:border-b-4'>
                    <TbBulb className='text-2xl'></TbBulb>
                    <span>{t("nav.blog")}</span>
                </Link>
            </nav>
            <div className="hidden lg:flex flex-col items-start xl:items-center justify-between xl:gap-y-4">
                {/* <div className="flex items-center justify-center gap-x-4">
                    <a href="https://mail.google.com/mail/?view=cm&to=fabiuuu8@gmail.com" target="_blank"><MdOutgoingMail className="hover:scale-110 text-white text-4xl"></MdOutgoingMail></a>
                    <a href="https://calendly.com/fabiancarabajal" target="_blank"><BsCalendarHeart className="hover:scale-110 text-white text-2xl"></BsCalendarHeart></a>
                    <a href="https://www.linkedin.com/in/fabian1501/" target="_blank"><BsLinkedin className="hover:scale-110 text-white text-2xl"></BsLinkedin></a>
                    <a href="https://github.com/Fabio1501" target="_blank"><BsGithub className="hover:scale-110 text-white text-2xl"></BsGithub></a>
                </div>         */}
                <BtnTranslation></BtnTranslation>
            </div>
            <NavMobile menu={menu} setMenu={setMenu}></NavMobile>
            {menu && (
                <div className='fixed left-0 top-0 h-screen w-full bg-black/50 backdrop-blur-2xl z-10'>
                    <ul className='flex lg:hidden items-center justify-center h-full w-full flex-col gap-y-16 text-lg font-medium'>
                        <nav className="flex flex-col lg:flex-row gap-y-12 xl:gap-x-12">
                            <Link to='/' className='flex gap-x-1 items-center text-xl hover:text-green-600'>
                                <AiOutlineHome></AiOutlineHome>
                                <span>Home</span>
                            </Link>
                            <Link to='/projects' className='flex gap-x-1 items-center text-xl hover:text-green-600'>
                                <DiCodeBadge></DiCodeBadge>
                                <span>Projects</span>
                            </Link>
                            <Link to='/contact' className='flex gap-x-1 items-center text-xl hover:text-green-600'>
                                <RiContactsLine></RiContactsLine>
                                <span>Contact</span>
                            </Link>
                            <Link to='/blog' className='flex gap-x-1 items-center text-xl hover:text-green-600'>
                                <TbBulb className='text-2xl'></TbBulb>
                                <span>Blog</span>
                            </Link>
                        </nav>
                        <BtnTranslation></BtnTranslation>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Nav;
