import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { TbLanguage } from 'react-icons/tb'

const BtnTranslation = () => {
  
  const [t, i18n] = useTranslation("home")
  const [spanish, setSpanish] = useState(true)
  const [english, setEnglish] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  return(
    <div>
      <button 
      onClick={() => setDropdown(!dropdown)}
      className="text-white font-normal text-xl rounded-lg px-4 py-2.5 text-center inline-flex items-center hover:font-semibold" type="button">
        <TbLanguage className='mr-2 text-2xl'></TbLanguage>
        <span>{spanish ? 'Español' : 'English'}</span>
        <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
      </button>
      <div id="dropdown" className={`${dropdown ? 'block'  : 'hidden'} z-10 absolute divide-y divide-gray-100 rounded-lg shadow w-36 bg-gray-900`}>
        <ul className="py-2 text-sm text-gray-200">
          <li>
            <button 
            onClick={() => {
              setSpanish(true)
              setEnglish(false)
              setDropdown(false)
              i18n.changeLanguage("es")
              return 0;
            }}
            className={`${spanish ? 'text-green-600 bg-gray-800' : 'text-white'} block px-4 py-2 hover:bg-gray-800 w-full text-start`}>{t("nav.btnSpanish")}</button>
          </li>
          <li>
            <button 
            onClick={() => {
              setSpanish(false)
              setEnglish(true)
              setDropdown(false)
              i18n.changeLanguage("en")
              return 0;
            }}
            className={`${english ? 'text-green-600 bg-gray-800' : 'text-white'} block px-4 py-2 hover:bg-gray-800 w-full text-start`}>{t("nav.btnEnglish")}</button>
          </li>
        </ul>
      </div>

    </div>

  )
}

export default BtnTranslation;
