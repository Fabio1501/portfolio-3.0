import { Link, useParams } from "react-router-dom";
import { post } from "./Blog";
import {BsLinkedin} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTiktok} from 'react-icons/bs'

const Details = () => {
    
    let { id } = useParams();
    let article = post.find(post => post.id === id)
    let postsForCategory =  post.filter(post => post.category === article.category)

    return(
        <div className="max-w-[1280px] m-auto px-8 lg:px-24 flex py-12 gap-x-12">
            <div className="flex flex-col items-start gap-y-4 text-white w-2/3">
                <h2 className="text-3xl">{article.title}</h2>
                <span>{article.date}</span>
                <p>{article.description}</p>
                <div className="bg-gradient-to-r from-white/5 to-green-600/5 rounded-xl w-3/4">
                    <img className="opacity-50 rounded-xl " src={article.img} alt={article.title} />
                </div>
                <h3 className="text-2xl">{article.subtitle1}</h3>
                <p>{article.paragraph1}</p>
                <img src={article.img1} alt={article.title} />
                <h3 className="text-2xl">{article.subtitle2}</h3>
                <p>{article.paragraph2}</p>
                <img src={article.img2} alt={article.title} />
            </div>
            <div className="flex flex-col w-1/3 gap-y-16">
                <div className="text-white/60 flex flex-col items-start p-4 gap-y-4">
                    <h3 className="font-bold text-xl text-green-600">Redes Sociales</h3>
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
                        <a href="https://www.youtube.com/@FabiDev9" target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <BsTiktok></BsTiktok>
                        </a>
                    </div>
                </div>
                <div className="text-white/60 flex flex-col items-start  gap-y-12 p-4">
                    <h3 className="font-bold text-xl text-green-600">Articulos relacionados</h3>
                    <div className="flex flex-col items-center gap-y-8">
                        {
                            postsForCategory.map((post) => {
                                return(
                                    <Link 
                                    className="font-semibold hover:scale-105"
                                    to={`/blog/${post.id}`}>
                                        <img className="" src={post.img} alt="" />
                                        <h3 className="text-white font-semibold text-xl">{post.title}</h3>
                                        <span>{post.date}</span>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;
