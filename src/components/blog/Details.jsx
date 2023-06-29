import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { post } from "./Blog";

import {BsLinkedin} from 'react-icons/bs'
import {BsCalendarCheck} from 'react-icons/bs'
import {BsClock} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTiktok} from 'react-icons/bs'
import Alert from "../contact/Alert";
import {BsShare} from 'react-icons/bs'

const Details = () => {
    let { id } = useParams();
    const [isHidden, setIsHidden] = useState(true)
    const [isSuccess, setIsSuccess] = useState(false)

    let article = post.find(post => post.id === id)
    let postsForCategory =  post.filter(post => post.category === article.category && post.id !== id)

    const shareSocialRed = () => {
        const articleUrl = `https://fabidev.vercel.app/blog/${article.id}`;

        if (navigator.share) {
            navigator.share({
            title: article.title,
            text: `Mira este interesante artículo: \n ${article.title}! \n`,
            url: articleUrl
            })
            .then(() => {
                setIsSuccess(true)
                setIsHidden(false)
            })
            .catch(error =>{ 
                console.log(error);
                setIsSuccess(false)
                setIsHidden(false)
            });
        } else {
            setIsSuccess(false)
            setIsHidden(false)
        }
    }

    return(
        <div className="max-w-[1280px] m-auto px-8 lg:px-24 flex flex-col lg:flex-row py-12 gap-x-12 gap-y-12">
            <div className="flex flex-col items-start gap-y-4 text-white w-full lg:w-2/3">
                <h2 className="text-4xl">{article.title}</h2>
                <div className="flex flex-col md:flex-row md:items-center gap-x-6 gap-y-4">
                    <div className="flex items-center gap-x-2 text-white/70">
                        <BsCalendarCheck/>
                        <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-x-2 text-white/70">
                        <BsClock/>
                        <span>{article.lectureMinutes}</span>
                    </div>
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: article.post }} 
                    className="flex flex-col gap-y-4"
                />
            </div>
            <div className="flex flex-col w-full lg:w-1/3 gap-y-12">
                <div className="text-white/60 flex flex-col items-start px-0 lg:px-4 gap-y-4">
                    <h3 className="font-bold text-2xl text-green-600">Redes Sociales</h3>
                    <p>Si te gusta lo que ves, pues ya tu sabes!</p>
                    <div className="flex items-center text-xl gap-x-4">
                        <a href="https://www.linkedin.com/in/fabian1501/" target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <BsLinkedin></BsLinkedin>
                        </a>
                        <a href="https://github.com/Fabio1501" target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <BsGithub></BsGithub>
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
                <div className="text-white/60 flex flex-col items-start  gap-y-12 px-0 lg:px-4">
                    <h3 className="font-bold text-2xl text-green-600 -mb-4">Articulos relacionados</h3>
                    <div className="flex flex-col gap-y-8">
                        {
                            postsForCategory.length ? 
                            postsForCategory.map((post) => {
                                return(
                                    <Link 
                                    key={post.id}
                                    className="w-full md:w-1/2 lg:w-full font-semibold hover:scale-[1.01]"
                                    to={`/blog/${post.id}`}>
                                        <LazyLoadImage className="" src={post.img} alt={post.title} />
                                        <h3 className="text-white font-semibold text-xl">{post.title}</h3>
                                        <span>{post.date}</span>
                                    </Link>
                                )
                            }) : 
                            <span className="text-white">Aun no hay artículos relacionados</span>
                        }
                    </div>
                </div>
            </div>
            <button
            className="flex items-center gap-x-2 md:gap-x-4 fixed bottom-5 left-1/2 -translate-x-1/2 px-4 py-2 bg-green-700 rounded-xl text-sm md:text-xl text-white font-semibold hover:bg-green-600"
            onClick={shareSocialRed}>
                <BsShare></BsShare>
                <span>Compartir artículo</span>
            </button>
            <Alert isSuccess={isSuccess} isHidden={isHidden} setIsHidden = {setIsHidden} titleSuccess={`¡Muchas gracias por compartir!`} titleError={`Algo salió mal, vuelve a intentarlo!`} textSuccess={`Gracias por apoyar mi contenido!`} textError={`Lo siento, puedes volver a intentarlo en segundos.`}/>
        </div>
    )
}

export default Details;
