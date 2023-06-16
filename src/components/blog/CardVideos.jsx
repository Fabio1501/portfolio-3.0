import {FiVideo} from 'react-icons/fi'
import {FiVideoOff} from 'react-icons/fi'

const CardVideos = ({img, title, category, paragraph, date, url}) => {
    return(
        <div className="text-white flex flex-col w-[31%] gap-y-2  rounded-b-xl">
            <img className="w-full" src={img} alt={title} />
            <div className="flex flex-col p-4 gap-y-4 bg-gradient-to-t from-white/5 rounded-b-xl">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl">{title}</h3>
                    <span className="bg-white/5 text-white/50 rounded-lg px-2 py-2 text-xl">{category === 'short' ? <FiVideoOff></FiVideoOff> : <FiVideo></FiVideo>}</span>
                </div>
                <p>{paragraph}</p>
                <div className="flex w-full justify-between items-center">
                    <span className="text-white/50">{date}</span>
                    <a href={url} target='_blank' className="bg-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-600 hover:cursor-pointer">Ver video</a>
                </div>
            </div>
        </div>
    )
}
export default CardVideos;
