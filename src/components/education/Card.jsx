import { useState } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

import {TbFileCertificate} from 'react-icons/tb'
import {MdOutlinePeopleAlt} from 'react-icons/md'

const Card = ({isEducation, title, name, date, description, reviews, certificate, btn}) => {

    const [hiddenModal, setHiddenModal] = useState(true)

    return(
        <div className="flex items-center">
            <div className={`${isEducation ? 'hidden' : 'flex'} items-center justify-center w-fit`}>
                <div className={`${isEducation ? '' : ''} hidden lg:block bg-green-700 w-2 h-2 rounded-full`}></div>
                <div className="h-[3px] bg-green-700 w-[46px] hidden lg:block"></div>
            </div>
            <div className={`${isEducation ? 'border-r-2 border-r-green-700 rounded-l-xl' : 'border-l-2 border-l-green-700 rounded-r-xl'} flex flex-col items-start justify-between text-white p-6 bg-white/5 gap-y-2`}>
                <h2 className="text-green-300">{title}</h2>
                <h3 className="-mt-1 text-xl font-semibold">{name}</h3>
                <span className="-mt-1">{date}</span>
                <div className="h-[3px] bg-green-700 w-1/5"></div>
                <p className="mt-6">{description}</p>
                <button 
                onClick={() => setHiddenModal(false)}
                className={`${!btn ? '' : 'py-2 px-4'} bg-green-700 hover:bg-green-600 mt-4`}>
                {!btn ? '' : isEducation ? 
                    <div className='flex gap-x-2 items-center'>
                        <span>
                            Ver certificación
                        </span>
                        <TbFileCertificate className='text-xl'></TbFileCertificate>
                    </div> : 
                    <div className='flex gap-x-2 items-center'>
                    <span>
                        Ver reviews
                    </span>
                    <MdOutlinePeopleAlt className='text-xl'></MdOutlinePeopleAlt>
                </div>
                }</button>
            </div>
            <div className={`${isEducation ? 'flex' : 'hidden'} items-center justify-center w-fit`}>
                <div className="h-[3px] bg-green-700 w-[46px] hidden lg:block"></div>
                <div className={`${isEducation ? 'order-1' : 'order-2'} bg-green-700 w-2 h-2 rounded-full hidden lg:block`}></div>
            </div>
            {
                isEducation ? 
                <div 
                onClick={() => setHiddenModal(true)}
                className={`${hiddenModal ? 'hidden' : 'fixed'} w-full h-full flex items-center justify-center top-0 left-0 z-40 p-4 overflow-x-hidden overflow-y-auto md:inset-0 backdrop-blur-sm bg-black/20`}>

                    <LazyLoadImage className='mx-auto w-11/12 lg:w-1/2' src={certificate} alt="certificate" />
                </div> : 
                <div 
                onClick={() => setHiddenModal(true)}
                className={`${hiddenModal ? 'hidden' : 'fixed'} w-full h-full flex items-center justify-center top-0 left-0 z-40 p-4 overflow-x-hidden overflow-y-auto md:inset-0 backdrop-blur-sm bg-black/20`}>
                    <div className='flex flex-wrap gap-y-8 lg:flex-nowrap w-full lg:w-3/4 gap-x-12 justify-center'>
                        {
                            reviews.map((review, index) => {
                                return <div key={index++} className='w-full lg:w-1/3 bg-zinc-800/90 relative px-6 py-12 text-white text-center flex flex-col items-center gap-y-8 border-green-500 border rounded-xl'>
                                    <div className='rounded-tl-xl card bg-green-700 flex'>
                                        <span className='font-semibold -rotate-45 absolute top-1/3 right-1/4 -translate-x-1/4 -translate-y-1/4'>
                                            REVIEW
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-x-4'>
                                        <LazyLoadImage className='rounded-full w-28 h-28' src={review.image} alt="compas" />
                                        <div className='text-center flex flex-col gap-y-2 items-center'>
                                            <a href={review.linkedin} target = '_blank' className='hover:underline text-xl font-semibold'>{review.name}</a>
                                            <span>{review.profession}</span>
                                        </div>
                                    </div>
                                    <div className='opacity-30 h-[2px] w-full bg-white'/>
                                    <p>{review.description}</p>
                                </div>           
                            })
                        }
                    </div>   
                </div>
            }
        </div>
    ) 
}

export default Card;
