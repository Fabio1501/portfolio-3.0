import {FaReact} from 'react-icons/fa'
import {SiPostgresql} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {SiPrisma} from 'react-icons/si'
import {SiHtml5} from 'react-icons/si'
import {SiSequelize} from 'react-icons/si'

const Carousel = () => {
    return(
        <div className="logos flex w-full m-auto">
            <div className="logos-slide flex">
                <div className='flex flex-col items-center'>
                    <FaReact className='img text-4xl text-white mx-[30px] md:text-[64px] md:mx-[40px]'></FaReact>
                    <span className='text-white font-semibold'>React.js</span>
                </div>
                <div className='flex flex-col items-center'>
                    <FaNodeJs className='img text-4xl text-white mx-[30px] md:text-[64px] md:mx-[40px]'></FaNodeJs>
                    <span className='text-white font-semibold'>Node.js</span>
                </div>
                <div className='flex flex-col items-center'>
                    <SiMongodb className='img text-4xl text-white mx-[30px] md:text-[64px] md:mx-[40px]'></SiMongodb>
                    <span className='text-white font-semibold'>MongoDB</span>
                </div>
                <div className='flex flex-col items-center'>
                    <SiExpress className='img text-4xl text-white mx-[30px] md:text-[64px] md:mx-[40px]'></SiExpress>
                    <span className='text-white font-semibold'>Express.js</span>
                </div>
                <div className='flex flex-col items-center'>
                    <SiPostgresql className='img text-4xl text-white mx-[30px] md:text-[64px] md:mx-[40px]'></SiPostgresql>
                    <span className='text-white font-semibold'>PostgreSQL</span>
                </div>
                <div className='flex flex-col items-center'>
                    <SiTailwindcss className='img text-4xl text-white mx-[30px] md:text-[64px] md:mx-[40px]'></SiTailwindcss>
                    <span className='text-white font-semibold'>TailwindCSS</span>
                </div>
                <div className='flex flex-col items-center'>
                    <SiPrisma className='img text-4xl text-white mx-[30px] md:text-[64px] md:mx-[40px]'></SiPrisma>
                    <span className='text-white font-semibold'>PrismaORM</span>
                </div>
                <div className='flex flex-col items-center'>
                    <SiHtml5 className='img text-4xl text-white mx-[30px] md:text-[64px] md:mx-[40px]'></SiHtml5>
                    <span className='text-white font-semibold'>HTML5</span>
                </div>
                <div className='flex flex-col items-center'>
                    <SiSequelize className='img text-4xl text-white mx-[30px] md:text-[64px] md:mx-[40px]'></SiSequelize>
                    <span className='text-white font-semibold'>Sequelize</span>
                </div>
            </div>
            <div className="logos-slide flex">
                <div className='flex flex-col items-center'>
                    <FaReact className='img text-4xl text-white mx-[30px] md:text-[64px] md:mx-[40px]'></FaReact>
                    <span className='text-white font-semibold'>React.js</span>
                </div>
                <div className='flex flex-col items-center'>
                    <FaNodeJs className='img text-4xl text-white mx-[30px] md:text-[64px] md:mx-[40px]'></FaNodeJs>
                    <span className='text-white font-semibold'>Node.js</span>
                </div>
                <div className='flex flex-col items-center'>
                    <SiPostgresql className='img text-4xl text-white mx-[30px] md:text-[64px] md:mx-[40px]'></SiPostgresql>
                    <span className='text-white font-semibold'>PostgreSQL</span>
                </div>
                <div className='flex flex-col items-center'>
                    <SiTailwindcss className='img text-4xl text-white mx-[30px] md:text-[64px] md:mx-[40px]'></SiTailwindcss>
                    <span className='text-white font-semibold'>TailwindCSS</span>
                </div>
                <div className='flex flex-col items-center'>
                    <SiMongodb className='img text-4xl text-white mx-[30px] md:text-[64px] md:mx-[40px]'></SiMongodb>
                    <span className='text-white font-semibold'>MongoDB</span>
                </div>
                <div className='flex flex-col items-center'>
                    <SiExpress className='img text-4xl text-white mx-[30px] md:text-[64px] md:mx-[40px]'></SiExpress>
                    <span className='text-white font-semibold'>Express.js</span>
                </div>
                <div className='flex flex-col items-center'>
                    <SiPrisma className='img text-4xl text-white mx-[30px] md:text-[64px] md:mx-[40px]'></SiPrisma>
                    <span className='text-white font-semibold'>PrismaORM</span>
                </div>
                <div className='flex flex-col items-center'>
                    <SiHtml5 className='img text-4xl text-white mx-[30px] md:text-[64px] md:mx-[40px]'></SiHtml5>
                    <span className='text-white font-semibold'>HTML5</span>
                </div>
                <div className='flex flex-col items-center'>
                    <SiSequelize className='img text-4xl text-white mx-[30px] md:text-[64px] md:mx-[40px]'></SiSequelize>
                    <span className='text-white font-semibold'>Sequelize</span>
                </div>
            </div>
        </div>
    )
}

export default Carousel;
