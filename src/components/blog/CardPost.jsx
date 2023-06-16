import {BsArrowRight} from 'react-icons/bs'
import { Link } from 'react-router-dom';
const CardPost = ({title, description, date, img, category, details, id}) => {
    return(
        <div className='rounded-l-xl w-full h-[320px] flex items-center text-white'>
            <img className='rounded-l-xl w-1/2 h-full' src={img} alt={title} />
            <div className='w-2/3 rounded-r-xl flex flex-col items-start h-full justify-between gap-y-6 bg-white/5 p-4'>
                <div className='w-full flex justify-between items-center'>
                    <h3 className='font-semibold text-2xl'>{title}</h3>
                    <span className="text-green-600 bg-white/5 px-2 py-1 rounded-xl">{category}</span>
                </div>
                <p>{description}</p>
                <div className='flex items-center justify-between w-full'>
                    <span>{date}</span>
                    <Link 
                    to={`/blog/${id}`}
                    className='flex items-center justify-center text-white gap-x-2 hover:text-green-700'>
                        <span>View more</span>
                        <BsArrowRight></BsArrowRight>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardPost;
