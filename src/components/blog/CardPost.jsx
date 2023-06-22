import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";

import {BsArrowRight} from 'react-icons/bs'

const CardPost = ({title, description, date, img, category, details, id}) => {
    return(
        <div className='rounded-l-xl w-full md:h-[230px] lg:h-[320px] flex flex-col md:flex-row items-center text-white'>
            <LazyLoadImage className='md:rounded-l-xl w-full md:w-[40%] xl:w-1/2 h-full' src={img} alt={title} />
            <div className='w-full md:w-2/3 md:rounded-r-xl flex flex-col items-start h-full justify-between gap-y-6 bg-white/5 p-4 overflow-hidden'>
                {/* <div className='w-full flex justify-between items-center gap-x-4'> */}
                <h3 className='font-semibold text-xl lg:text-2xl'>{title}</h3>
                    {/* <span className="text-green-600 bg-white/5 px-2 py-1 rounded-xl ">{category}</span>
                </div> */}
                <p className='text-sm md:text-base overflow-hidden overflow-ellipsis'>{description}</p>
                <div className='flex items-center justify-between w-full'>
                    <span>{date}</span>
                    <Link 
                    to={`/blog/${id}`}
                    className='flex text-xl items-center justify-center text-white gap-x-2 hover:text-green-700'>
                        <span>Leer más</span>
                        <BsArrowRight></BsArrowRight>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardPost;
