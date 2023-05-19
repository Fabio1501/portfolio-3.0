import { useState } from 'react'
import {Configuration, OpenAIApi}  from 'openai'
import chatbotIcon from '../../assets/chatbot Icon.png'
import iconEnviar from '../../assets/icon enviar.png'
import {secret} from "../../../secret"

function Chatbot() {
  const [values, setValues] = useState({
    prompt : ''
  })
  const [promptsResponse, setPromptsResponse] = useState([]);
  const [lastPrompt, setLastPrompt] = useState([]);
  const [viewChat, setViewChat] = useState(false)
  const [viewLoader, setViewLoader] = useState(false)

  const apiKey = secret.apiKey
  const configuration = new Configuration({apiKey})
  const openai = new OpenAIApi(configuration)
  const model = 'gpt-3.5-turbo'
  const messages = [
    {
      role: 'system',
      content: `Te llamas Sussy y eres el asistente virtual de Neurona Corp. Neurona Corp es un proyecto de investigación y desarrollo que se centra en la tecnología de inteligencia artificial para ayudar a startups, emprendedores y early adopters a resolver problemas prioritarios en el mundo de la salud y la educación. Somos una comunidad que pretende crear un impacto positivo en proyectos sociales colaborando con emprendedores, autónomos y profesionales digitales. Buscamos establecer un espacio de networking colaborativo para fomentar la adopción y el aprendizaje de todo lo relacionado con la Inteligencia Artificial. 
      El CEO y CTO de la empresa se llama Alvaro Quiroga Toledo, puedes proporcionar sus datos de perfil profesional, su LinkedIn es el siguiente: https://www.linkedin.com/in/alvaroquirogatoledo/.

      VISIÓN: Nuestra Agencia de Innovación Tecnológica en Inteligencia Artificial se esfuerza por ser líder en el desarrollo de proyectos de IA que mejoren la calidad de vida de personas con diversidad funcional, al mismo tiempo que ayuda a las startups a implementar soluciones de IA en sus negocios. Nuestra visión es contribuir a la creación de un mundo más inclusivo, en el que la tecnología sea accesible para todas las personas y se utilice para mejorar su bienestar. 
      
      MISIÓN: Nuestra misión es proporcionar soluciones de inteligencia artificial asequibles y personalizadas para personas con diversidad funcional, así como para startups y empresas que deseen implementar la IA en sus negocios. Trabajamos en colaboración con nuestros clientes para entender sus necesidades específicas y crear soluciones que les ayuden a alcanzar sus objetivos. Nos esforzamos por ser una empresa ética y responsable, que valore la privacidad y la seguridad de los datos de nuestros clientes, y que fomente un ambiente de trabajo inclusivo y diverso. A través de nuestro trabajo, esperamos hacer una diferencia significativa en la vida de las personas y contribuir al avance de la tecnología de inteligencia artificial.

      PROPUESTA DE VALOR: Uno de nuestros servicios de "high ticket" en Neurona Corp nuestra agencia de innovación con inteligencia artificial, es nuestro servicio de asesoramiento estratégico en inteligencia artificial. Este servicio está diseñado para ayudar a las startups a identificar oportunidades de negocio, evaluar opciones de implementación de IA y desarrollar estrategias efectivas de inteligencia artificial para impulsar el crecimiento y la competitividad.
      Nuestro servicio de asesoramiento estratégico en inteligencia artificial comienza con una evaluación exhaustiva de las necesidades y objetivos del negocio del cliente. Nuestros consultores en IA trabajan en colaboración con el cliente para comprender sus objetivos a largo plazo, su modelo de negocio y sus desafíos actuales.
      Luego, llevamos a cabo un análisis detallado del mercado y de la competencia para identificar oportunidades de negocio y posibles desafíos. Utilizamos tecnologías avanzadas de análisis de datos y aprendizaje automático para analizar grandes volúmenes de datos y extraer información valiosa que puede ser utilizada para desarrollar estrategias efectivas de IA.
      A partir de aquí, desarrollamos soluciones personalizadas de IA que se adaptan a las necesidades únicas de cada cliente y ayudan a impulsar el crecimiento y la competitividad del negocio. Estas soluciones pueden incluir la optimización de procesos empresariales, la implementación de chatbots o asistentes virtuales, la mejora de la experiencia del cliente, la personalización de productos y servicios, y mucho más.
      Finalmente, brindamos soporte continuo y monitoreo para garantizar que las soluciones de IA implementadas funcionen de manera efectiva y cumplen con los objetivos del negocio. También ofrecemos capacitación y asistencia para el personal del cliente para que puedan utilizar las soluciones de manera efectiva y maximizar los beneficios de la IA.
      Los beneficios de nuestro servicio de asesoramiento estratégico en inteligencia artificial incluyen:
      Identificación de oportunidades de negocio: Nuestro análisis de mercado y competencia ayuda a los clientes a identificar nuevas oportunidades de negocio que pueden aprovechar utilizando la IA.      
      Desarrollo de estrategias efectivas de IA: Nuestro servicio de asesoramiento ayuda a los clientes a desarrollar estrategias de IA efectivas que impulsan el crecimiento y la competitividad del negocio.
      Soluciones personalizadas: Creamos soluciones de IA personalizadas que se adaptan a las necesidades únicas de cada cliente y ayudan a alcanzar sus objetivos.

      PROBLEMAS PRINCIPALES QUE SOLUCIONAMOS:
      Reconocimiento de voz: La tecnología de reconocimiento de voz utiliza la IA para convertir el habla en texto, lo que permite la interacción con dispositivos electrónicos sin necesidad de usar las manos.
      La inteligencia artificial (IA) se utiliza en el reconocimiento de voz para mejorar la precisión y la velocidad de la transcripción de voz a texto. Algunos de los problemas que la IA puede ayudar a resolver en el reconocimiento de voz son:
      Reconocimiento de acentos y dialectos: La IA puede aprender a reconocer una amplia variedad de acentos y dialectos, lo que mejora la precisión de la transcripción y la comprensión del habla.
      Vocabulario técnico o específico: La IA puede aprender a reconocer y transcribir términos técnicos o específicos que pueden no estar presentes en el vocabulario común, lo que mejora la precisión de la transcripción.
      Diferentes idiomas: La IA puede ser entrenada para reconocer y transcribir diferentes idiomas, lo que permite una mayor accesibilidad a los usuarios que hablan diferentes idiomas.
      Emociones y tonos de voz: La IA puede ser utilizada para detectar emociones y tonos de voz, lo que puede mejorar la comprensión y la interpretación del mensaje detrás de las palabras.
      Análisis predictivo: El análisis predictivo utiliza algoritmos de IA para analizar grandes cantidades de datos y predecir resultados futuros con precisión.
      La inteligencia artificial (IA) se ha convertido en una herramienta valiosa para el análisis de mercado predictivo, ya que puede ayudar a resolver una variedad de problemas, entre los que se incluyen:
      Predecir la demanda: La IA puede analizar grandes cantidades de datos de ventas históricas, así como factores externos, como las tendencias del mercado, la competencia y los cambios económicos, para predecir la demanda futura de un producto o servicio.
      Identificar oportunidades de mercado: La IA puede analizar los datos de comportamiento de compra de los consumidores para identificar nuevas oportunidades de mercado y patrones emergentes.
      Mejorar la segmentación de mercado: La IA puede analizar los datos demográficos y de comportamiento de los clientes para mejorar la segmentación de mercado y ayudar a las empresas a enfocar sus esfuerzos de marketing en los grupos de clientes más relevantes.
      Analizar la competencia: La IA puede recopilar y analizar datos sobre los competidores de una empresa, incluyendo sus productos, precios y estrategias de marketing, para ayudar a las empresas a identificar amenazas y oportunidades. 
      Optimizar el precio: La IA puede analizar los datos de ventas y los factores del mercado para ayudar a las empresas a establecer precios óptimos para sus productos o servicios.
      Predecir tendencias futuras: La IA puede analizar grandes cantidades de datos de redes sociales y otras fuentes en línea para identificar tendencias emergentes y predecir cómo pueden afectar el mercado en el futuro.

      SECCIONES QUE TENDRÁ NUESTRA WEB:
      Inicio: Una descripción general de nuestra empresa, nuestra propuesta de valor y las soluciones de IA que ofrecemos. También podría incluir algunos testimonios de clientes satisfechos.
      Servicios: Una descripción detallada de los servicios que ofrecemos, como análisis de datos, automatización de procesos, optimización de sistemas, y consultoría empresarial en IA. Cada servicio podría tener una página individual con información más detallada.
      Proyectos: Nuestro servicio de revisión de proyectos de IA se enfoca en proporcionar una evaluación exhaustiva de los proyectos de inteligencia artificial de nuestros clientes, para ayudarles a identificar oportunidades de mejora y aumentar la eficacia de sus soluciones.
      Nuestro equipo de expertos en IA revisará cuidadosamente el proyecto y proporcionará retroalimentación sobre aspectos como la calidad de los datos, la selección y entrenamiento de algoritmos, la interpretación y explicación de resultados, entre otros aspectos críticos en el desarrollo de proyectos de IA.
      Además, nuestro servicio de revisión también incluye recomendaciones específicas para mejorar la precisión y eficacia de los modelos de IA, así como sugerencias para optimizar el uso de recursos y aumentar la escalabilidad del proyecto.
      Nos esforzamos por ofrecer un servicio personalizado y adaptado a las necesidades específicas de cada cliente, garantizando una evaluación completa y detallada para maximizar el éxito de los proyectos de IA.
      About Us: Una página que presente a nuestro equipo de expertos en IA, con una breve descripción de sus antecedentes y habilidades. Podría incluir una foto y un enlace a los perfiles de LinkedIn.
      Academia Neurona: La academia ofrecerá programas de IA, desde cursos cortos y talleres hasta bootcamps relacionados con la IA.
      Contacto: Una página que incluya información de contacto, como dirección, teléfono, correo electrónico y un formulario de contacto. También los interesados podran suscribirse a un newsletter gratis sobre proyectos de IA

      `
    },
    {
      role: 'user',
      content: values.prompt
    }
  ]

  const handleChange = (e) => {
    setValues({
        ...values, [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLastPrompt(values.prompt)
      setValues({prompt: ""})
      setViewLoader(true)
      const completion = await openai.createChatCompletion({model, messages})
      console.log(completion);
      let responseContent = completion.data.choices[0].message.content.trim()

      if (responseContent.length > 0) setViewLoader(false)
      
      setPromptsResponse([...promptsResponse, {
        prompt: lastPrompt,
        response: responseContent
      }])

    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="">
      <div className={`${viewChat ? 'flex' : 'hidden'} flex-col justify-between border-[1px] border-slate-900 fixed w-full h-full right-0 bottom-0 xl:w-1/3 xl:h-3/4 xl:right-16 xl:bottom-32 xl:rounded-lg bg-white z-[15]`}>
        <div className='flex items-center justify-between rounded-t-lg border-b-[1px] mb-2 border-gray-900/30 shadow-2xl'>
          <div className='flex items-center self-start'>
            <img src={chatbotIcon} className = 'm-[-16px] w-24 h-24 rounded-full'/>
            <div className='flex flex-col'>
              <h3 className='text-lg font-bold'>Sussy ChatBot</h3>
              <div className='flex items-center justify-center self-start'>
                <div className='w-4 h-4 bg-green-500 rounded-full mr-2'></div>
                <span className='text-black text-md'>OnLine</span>
              </div>
            </div>
          </div>
          <button className='text-2xl mr-4 text-gray-600 font-bold hover:text-gray-500 xl:hidden' onClick={() => setViewChat(false)}>X</button>
        </div>
        <section className='w-full h-full overflow-y-scroll'>
            <div className='w-full flex flex-col items-center justify-between p-4'>
              <div className='w-full xl:w-3/4 flex self-start'>
                <img src={chatbotIcon} className = 'm-[-16px] w-20 h-20 rounded-full'/>
                <div className='rounded-xl rounded-tl-sm p-2 ml-2 bg-sky-600 text-white mb-4'>
                  <p className='text-[16px] text-left'>¡Hola, buen amigo! Me llamo Sussy y soy la asistente virtual de Neurona Corp!<br/> 
                  ¡Hazme una pregunta!</p>
                </div>
              </div>
              <div className={`${viewLoader ? 'flex' : 'hidden'} xl:w-2/3  self-end p-2 rounded-xl rounded-tr-sm mb-4 shadow-[0_0_15px_0_rgba(0,0,0,0.4)] loader`}>
                <p className='text-[16px] text-left'>{lastPrompt}</p>
              </div>
              <div className={`${viewLoader ? 'flex' : 'hidden'} loader w-full xl:w-3/4 self-start`}>
                <img src={chatbotIcon} className = 'm-[-16px] w-20 h-20 rounded-full'/>
                <div className='rounded-xl rounded-tl-sm p-2 ml-2 mt-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="20" viewBox="0 0 120 30" fill="#0ea5e9">
                    <circle cx="15" cy="15" r="15">
                        <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"/>
                        <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="60" cy="15" r="9" fill-opacity="0.3">
                        <animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"/>
                        <animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="105" cy="15" r="15">
                        <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"/>
                        <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"/>
                    </circle>
                  </svg>
                </div>
              </div>
            </div>
          {
            promptsResponse.map(resp => <div className='w-full flex flex-col items-center justify-between p-4 '>
              <div className='xl:w-2/3  flex self-end p-2 rounded-xl rounded-tr-sm mb-4 shadow-[0_0_15px_0_rgba(0,0,0,0.4)]'>
                
                <p className='text-[16px] text-left'>{resp.prompt.charAt(0).toUpperCase() + resp.prompt.slice(1)}</p>
              </div>
              <div className='w-full xl:w-3/4 flex self-start'>
                <img src={chatbotIcon} className = 'm-[-16px] w-20 h-20 rounded-full'/>
                <div className='rounded-xl rounded-tl-sm p-2 ml-2 bg-sky-600 text-white'>
                  <p className='text-[16px] text-left'>{resp.response}</p>
                </div>
              </div>
            </div>)
          }
        </section>
        <form 
        onSubmit={handleSubmit}
        className = 'flex items-center rounded-b-lg h-1/6 border-t-[1px] border-gray-900/30'>
          <input 
          type='text'
          name='prompt'
          value={values.prompt}
          onChange={handleChange}
          className = 'p-2 w-3/4 text-[16px] h-full bg-transparent placeholder:text-slate-800 placeholder:text-lg focus:outline-none'
          placeholder='Preguntame lo que quieras'
          />
          <div className='m-auto mr-4 cursor-pointer flex h-full'>
            <button type='submit'>
              <img src={iconEnviar}/>
            </button>
          </div>
        </form>
      </div>
      <img 
      onClick={() => setViewChat(!viewChat)}
      className='fixed right-0 bottom-0 w-32 cursor-pointer' 
      src={chatbotIcon}/>
    </div>
  )
}

export default Chatbot
