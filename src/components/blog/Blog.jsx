import { useEffect, useState } from 'react'
import postPrueba from '../../assets/blog/desarrollo-web/post1.png'
import CardPost from './CardPost'
import CardVideos from './CardVideos'
import {FiVideo} from 'react-icons/fi'
import {FiVideoOff} from 'react-icons/fi'
import {AiOutlineYoutube} from 'react-icons/ai'
import {BsPencilSquare} from 'react-icons/bs'
import {DiCodeBadge} from 'react-icons/di'
import {AiOutlineNodeExpand} from 'react-icons/ai'
import {MdOutlineNature} from 'react-icons/md'

export const post = [
    {
        id: crypto.randomUUID(10),
        title: 'Title',
        description : 'iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        date: '23/04/2023',
        img: postPrueba,
        category: 'webDevelopment',
        subtitle1: '',
        paragraph1: '',
        img1: '',
        subtitle2: '',
        paragraph2: '',
        img2: ''
    },
    {
        id: crypto.randomUUID(10),
        title: 'Title',
        description : 'iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        date: '23/04/2023',
        img: postPrueba,
        category: 'webDevelopment',
        details: {
            relationsPosts: [
                {
                    title: '',
                    url: ''
                }
            ]
        }
    },
    {
        id: crypto.randomUUID(10),
        title: 'Title',
        description : 'iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        date: '23/04/2023',
        img: postPrueba,
        category: 'artificialIntelligence',
        details: {

        }
    },
    {
        id: crypto.randomUUID(10),
        title: 'Title',
        description : 'iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        date: '23/04/2023',
        img: postPrueba,
        category: 'personalGrowth',
        details: {

        }
    }
]

export const video = [
    {
        id: crypto.randomUUID(10),
        title: 'Title',
        paragraph : 'iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        date: '23/04/2023',
        img: postPrueba,
        category: 'short',
        url: ''
    },
    {
        id: crypto.randomUUID(10),
        title: 'Title',
        paragraph : 'iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        date: '23/04/2023',
        img: postPrueba,
        category: 'video',
    },
    {
        id: crypto.randomUUID(10),
        title: 'Title',
        paragraph : 'iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        date: '23/04/2023',
        img: postPrueba,
        category: 'video',
        
    },
]

const Blog = () => {  

    const [posts, setPosts] = useState([])
    const [postsFilter, setPostsFilter] = useState([])
    const [videos, setVideos] = useState([])
    const [videosFilter, setVideosFilter] = useState([])

    useEffect(() => {
        setPosts(post)
        setPostsFilter(post)
        setVideos(video)
        setVideosFilter(video)
    }, [])
    
    const handlePosts = (category) => {
        if(category === '') return setPostsFilter(post) 

        let postsForCategory =  posts.filter(post => post.category === category)
        setPostsFilter(postsForCategory)
    }

    const handleVideos = (category) => {
        if(category === '') return setVideosFilter(video) 

        let postsForCategory =  videos.filter(video => video.category === category)
        setVideosFilter(postsForCategory)
    }

    return(
        <div className="py-12 bg-gradient-to-r from-white/5 to-green-600/5">
            <div className="max-w-[1280px] m-auto px-8 lg:px-24 flex flex-col gap-y-16">
                <div className="flex justify-between items-center w-full">
                    <div className='font-bold self-start'>
                        <span className="text-sm text-green-300 mb-4 md:text-xl font-normal">APORTANDO</span>
                        <h1 className="text-white xl:text-4xl text-xl md:text-5xl">Blog <b className="font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-400 to-green-600">personal</b></h1>
                        <div className="h-[4px] lg:h-2 bg-green-600 w-1/4 lg:w-1/5 mt-4"></div>
                    </div>
                    <div>
                        <ul className="gap-x-6 flex items-center justify-between text-white">
                            <button className="py-2 px-4 flex gap-x-2 items-center rounded-xl bg-white/5 hover:bg-white/10 hover:cursor-pointer"
                            onClick={() => handlePosts('')}>
                                <span>All</span>
                                <BsPencilSquare></BsPencilSquare>
                            </button>
                            <button className="py-2 px-4 flex gap-x-2 items-center rounded-xl bg-white/5 hover:bg-white/10 hover:cursor-pointer"
                            onClick={() => handlePosts('personalGrowth')}> <span>Personal Growth</span> <MdOutlineNature></MdOutlineNature></button>
                            <button className="py-2 px-4 flex gap-x-2 items-center rounded-xl bg-white/5 hover:bg-white/10 hover:cursor-pointer"
                            onClick={() => handlePosts('artificialIntelligence')}> <span>Artificial Inteligence</span> <AiOutlineNodeExpand></AiOutlineNodeExpand></button>
                            <button className="py-2 px-4 flex gap-x-2 items-center rounded-xl bg-white/5 hover:bg-white/10 hover:cursor-pointer"
                            onClick={() => handlePosts('webDevelopment')}> <span>Web Development</span><DiCodeBadge></DiCodeBadge> </button>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-y-8'>
                    {
                        postsFilter.length > 0 ? 
                        postsFilter?.map((post) => {
                            return <CardPost title = {post.title} description = {post.description} date = {post.date} img = {post.img} category = {post.category} details = {post.details} key={post.id} id={post.id} ></CardPost>
                        }) :
                        'Loading...'
                    }
                </div>
                <div className="flex justify-between items-center w-full">
                    <div className='font-bold self-start'>
                        <span className="text-sm text-green-300 mb-4 md:text-xl font-normal">CREANDO</span>
                        <h1 className="text-white xl:text-4xl text-xl md:text-5xl">Videos <b className="font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-400 to-green-600">YouTube</b></h1>
                        <div className="h-[4px] lg:h-2 bg-green-600 w-1/4 lg:w-1/5 mt-4"></div>
                    </div>
                    <div>
                        <ul className="gap-x-6 flex items-center justify-between text-white">
                            <button 
                            onClick={() => handleVideos('')}
                            className="py-2 px-4 flex items-center gap-x-2 rounded-xl bg-white/5 hover:bg-white/10 hover:cursor-pointer"><span>All</span> <AiOutlineYoutube></AiOutlineYoutube></button>
                            <button 
                            onClick={() => handleVideos('video')}
                            className="py-2 px-4 flex items-center gap-x-2 rounded-xl bg-white/5 hover:bg-white/10 hover:cursor-pointer"><span>Videos</span> <FiVideo></FiVideo></button>
                            <button 
                            onClick={() => handleVideos('short')}
                            className="py-2 px-4 flex items-center gap-x-2 rounded-xl bg-white/5 hover:bg-white/10 hover:cursor-pointer"><span>Shorts</span> <FiVideoOff></FiVideoOff></button>
                            
                        </ul>
                    </div>
                </div>
                <div className='flex flex-wrap justify-between'>
                    {
                        videosFilter ? 
                        videosFilter?.map((video) => {
                            return <CardVideos title = {video.title} paragraph = {video.paragraph} date = {video.date} img = {video.img} category = {video.category} url = {video.url} key={video.id} id={video.id}></CardVideos>
                        }) : 
                        'Loading'
                    }
                </div>
            </div>
        </div>
    )
}

export default Blog;
