import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Modal({aboutUs, setAboutUs}){
  
  const [t, i18n] = useTranslation("home")

  const iframeRef = useRef(null);

  useEffect(() => {
    // Cargar la biblioteca del reproductor de YouTube
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Función de inicialización del reproductor de YouTube
    window.onYouTubeIframeAPIReady = () => {
      // Crear el reproductor de YouTube
      if (iframeRef.current) {
        new window.YT.Player(iframeRef.current, {
          videoId: 'oTd7mWkvd2Q',
          // Configuraciones adicionales del reproductor...
        });
      }
    };
  }, []);
  
  const handleAboutUs = () => {
    if (iframeRef.current && window.YT) {
      iframeRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
    setAboutUs(false)
  } 

  return(
    <div className={` ${aboutUs ? 'w-full h-full flex items-center justify-center fixed top-0 left-0 z-40 p-4 overflow-x-hidden overflow-y-auto md:inset-0 backdrop-blur-sm bg-black/20' : 'hidden'}`}>
      <div className="relative w-full lg:w-2/3 h-1/2 max-h-full m-auto">
        <div className="relative bg-gray-800 rounded-lg shadow">
          <div className="flex self-start items-center justify-between p-4 border-b border-gray-900 rounded-t">
            <h3 className="text-xl font-semibold dark:text-white">
            {t("home.modal")}
            </h3>
            <button
            onClick={handleAboutUs}
            type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
            </button>
          </div>
          <iframe 
          ref={iframeRef}
          className='xl:h-[450px] w-full h-[250px] md:h-[500px] rounded-b-xl' src="https://www.youtube.com/embed/oTd7mWkvd2Q" title="Hola, soy FabiDev 🧑‍💻🤲" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}
