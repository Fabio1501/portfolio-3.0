import { MdClose } from 'react-icons/md'

const Alert = ({isSuccess, isHidden, setIsHidden, titleSuccess, titleError, textSuccess, textError}) => {

    return(
        <div className={`${isHidden ? 'hidden' : 'block'} fixed w-full h-screen flex items-center justify-center top-0 left-0 z-40 overflow-x-hidden overflow-y-auto md:inset-0 backdrop-blur-sm`}>
            <div className={`${ isSuccess ? 'border-green-700' : 'border-red-700'} fixed flex flex-col items-center justify-center w-11/12 lg:w-1/3 gap-y-2 rounded-xl bg-black text-white pb-8 border`}>
                <div 
                onClick={() => setIsHidden(!isHidden)}
                className="flex flex-col items-center w-full relative text-center">
                    <div className="text-xl lg:text-2xl font-bold px-8 mt-12">{isSuccess ? 
                    <div className='text-green-700'>{titleSuccess}</div> : 
                    <div className='text-red-700'>{titleError}</div>}</div>
                    <MdClose 
                    className="absolute top-2 right-2 text-4xl mr-2 text-white  cursor-pointer hover:bg-white/10 hover:rounded-lg"></MdClose>
                </div>
                <p className="text-center px-8">{isSuccess ? textSuccess : textError}</p>
            </div>
        </div>
    )
}

export default Alert;
