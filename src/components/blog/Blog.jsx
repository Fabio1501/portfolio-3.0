import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import CardPost from './CardPost'
import CardVideos from './CardVideos'
import Alert from '../contact/Alert';

import postDev1 from '../../assets/blog/desarrollo-web/post1.png'
import postDev2 from '../../assets/blog/desarrollo-web/post2.png'
import postIa1 from '../../assets/blog/inteligencia-artificial/post1.png'
import postPer1 from '../../assets/blog/crecimiento-personal/post1.png'

import video1 from '../../assets/blog/videos/quien-soy-yo.png'
import video2 from '../../assets/blog/videos/presentacion-portfolio.jpg'
import video3 from '../../assets/blog/videos/card-airbnb.jpg'

import {FiVideo} from 'react-icons/fi'
import {FiVideoOff} from 'react-icons/fi'
import {AiOutlineYoutube} from 'react-icons/ai'
import {BsPencilSquare} from 'react-icons/bs'
import {DiCodeBadge} from 'react-icons/di'
import {AiOutlineNodeExpand} from 'react-icons/ai'
import {MdOutlineNature} from 'react-icons/md'

export const post = [
    {
        id: '76259a41-0000-6ac3c88905e4',
        title: 'Descubre las ventajas de utilizar Tailwind en el desarrollo web',
        description : 'Para lograr sitios web atractivos, funcionales y eficientes, es muy importante utilizar herramientas que optimicen el proceso de diseño y desarrollo. En este sentido, Tailwind se ha posicionado como una opción popular entre los desarrolladores web debido a sus numerosas ventajas. En este artículo, exploraremos las razones por las cuales Tailwind se ha convertido en una herramienta crucial para muchos profesionales en el mundo del desarrollo web.',
        date: '15/04/2023',
        img: postDev1,
        category: 'webDevelopment',
        post: `
            <p>Para lograr sitios web atractivos, funcionales y eficientes, es crucial utilizar herramientas y tecnologías que optimicen el proceso de diseño y desarrollo. En este sentido, Tailwind se ha posicionado como una opción popular entre los desarrolladores web debido a sus numerosas ventajas. En este artículo, exploraremos las razones por las cuales Tailwind se ha convertido en una herramienta indispensable para muchos profesionales en el mundo del desarrollo web.</p>
            <h2 style="font-size:32px;margin-top:12px;">Productividad y eficiencia mejoradas<h2/>
            <p>Una de las principales ventajas de utilizar Tailwind en el desarrollo web es su enfoque en la productividad y la eficiencia. A diferencia de otros marcos de diseño, Tailwind utiliza clases utilitarias predefinidas que permiten a los desarrolladores diseñar y estilizar rápidamente los componentes de su sitio web. Estas clases, como "w-1/2" para establecer un ancho del 50%, o "bg-blue-500" para establecer un color de fondo azul, permiten a los desarrolladores ahorrar tiempo al evitar la necesidad de escribir CSS personalizado para cada elemento. Con Tailwind, los desarrolladores pueden centrarse en la funcionalidad y la lógica del sitio web, sin tener que preocuparse tanto por los aspectos visuales.</p>
            <img src="https://i.postimg.cc/pTcVHSQV/Tailwind-image1.png" alt="tailwind" style="margin-left:-36px;"/>
            <h2 style="font-size:32px;margin-top:12px;">Flexibilidad y personalización<h2/>
            <p>Otra ventaja clave de Tailwind es su gran flexibilidad y capacidad de personalización. A través de su sistema de configuración, los desarrolladores pueden adaptar completamente la apariencia de su sitio web para que se ajuste a sus necesidades específicas. Con Tailwind, es posible personalizar aspectos como colores, tipografías, espaciados, bordes y mucho más. Además, Tailwind proporciona una amplia variedad de utilidades que permiten crear diseños responsivos y adaptativos de manera sencilla. Esta capacidad de personalización sin límites brinda a los desarrolladores la libertad creativa necesaria para llevar a cabo proyectos web únicos y distintivos.</p>
            <img src="https://i.postimg.cc/PxXc4rwN/Tailwind-image2.png" alt="tailwind" style="margin-left:-36px;"/>
        `,
        lectureMinutes: '5 minutos de lectura'
    },
    {
        id: '76259a41-0001-6ac3c88905e4',
        title: 'Ejemplos de uso en Tailwind',
        description : 'Tailwind ha ganado popularidad entre los desarrolladores por su enfoque único en la productividad y la personalización. En este artículo, no solo exploraremos las ventajas generales de utilizar Tailwind, sino que también proporcionaremos ejemplos prácticos de cómo puedes aprovechar sus clases para crear diseños sorprendentes, incluso si recién estás empezando en el desarrollo web podrás sacarle provecho a este artículo.',
        date: '16/06/2023',
        img: postDev2,
        category: 'webDevelopment',
        post: `
            <p>Tailwind ha ganado popularidad entre los desarrolladores por su enfoque único en la productividad y la personalización. En este artículo, no solo exploraremos las ventajas generales de utilizar Tailwind, sino que también proporcionaremos ejemplos prácticos de cómo puedes aprovechar sus clases para crear diseños sorprendentes, incluso si recién estás empezando en el desarrollo web podrás sacarle provecho a este artículo.</p>
            <h2 style="font-size:32px;margin-top:12px;">Productividad simplificada<h2/>
            <p>Cuando comienzas en el desarrollo web, una de las mayores preocupaciones es la cantidad de tiempo que puedes pasar escribiendo código CSS personalizado para cada elemento de tu sitio. Tailwind aborda este problema al proporcionar un conjunto de clases predefinidas que puedes utilizar directamente en tu HTML. Por ejemplo, si deseas establecer el borde de color azul a un div, simplemente agrega la clase "border-blue-500" a ese elemento. ¡Es así de simple! Con Tailwind, puedes diseñar y estilizar rápidamente tu sitio web sin la necesidad de escribir líneas y líneas de código CSS adicional. Esta productividad simplificada te permite enfocarte en otros aspectos esenciales de tu proyecto.</p>
            <h2 style="font-size:32px;margin-top:12px;">Ejemplos de uso sencillos<h2/>
            <p>Veamos algunos ejemplos prácticos de cómo utilizar las clases utilitarias de Tailwind para crear diseños impresionantes</p>
            <h3 style="font-size:24px;margin-top:12px;">Espaciado y márgenes:<h3/>
            <p>Con Tailwind, puedes ajustar fácilmente el espaciado y los márgenes de tus elementos. Por ejemplo, si deseas agregar un margen superior de tamaño pequeño a un botón, simplemente agrega la clase "mt-2" (mt significa "margin-top" en inglés y 2 es el valor de tamaño) a ese botón. Puedes experimentar con diferentes valores para lograr el espaciado deseado.</p>
            <img src="https://i.postimg.cc/bvQ4vgCk/Tailwind-image3.png" alt="tailwind" class='-ml-4 h-24 md:h-44 md:-ml-10'/>
            <h3 style="font-size:24px;margin-top:12px;">Tipografía y estilos de texto:<h3/>
            <p>Personalizar la tipografía y los estilos de texto es otra área en la que Tailwind brilla. Si deseas aplicar un tamaño de fuente grande a un encabezado, simplemente agrega la clase "text-3xl" (text significa "texto" en inglés y 3xl es el tamaño grande) al elemento del encabezado. También puedes utilizar clases como "font-bold" para aplicar negrita o "text-red-500" para cambiar el color del texto a rojo.</p>
            <img src="https://i.postimg.cc/hj0jV9j7/Tailwind-image4.png" alt="tailwind" class='-ml-4 h-24 md:h-44 md:-ml-10'/>
            <h3 style="font-size:24px;margin-top:12px;">Diseños responsivos:<h3/>
            <p>Tailwind facilita la creación de diseños responsivos para dispositivos móviles. Puedes utilizar las clases "md:flex" (md representa el tamaño de pantalla mediano) y "lg:w-1/2" (lg representa el tamaño de pantalla grande) para crear un diseño de dos columnas en pantallas medianas y grandes, y un diseño de una columna en pantallas más pequeñas.</p>
            <img src="https://i.postimg.cc/fbyn8mB9/Tailwind-image5.png" alt="tailwind" class='-ml-4 h-24 md:h-44 md:-ml-10'/>
            <p>Estos son solo algunos ejemplos básicos de cómo puedes utilizar Tailwind para mejorar tus diseños web sin tener que escribir mucho CSS personalizado. A medida que te familiarices más con Tailwind, descubrirás una amplia gama de clases y opciones de personalización que te permitirán llevar tus proyectos al siguiente nivel.</p>
        `,
        lectureMinutes: '5 minutos de lectura'
    },
    {
        id: '76259a41-0002-6ac3c88905e4',
        title: 'La importancia del establecimiento de metas',
        description : 'Al establecer metas claras y significativas, te das la oportunidad de superarte cada día y lograr tus aspiraciones más grandes. En este artículo, exploraremos la importancia del establecimiento de metas y brindaremos consejos prácticos sobre cómo puedes hacerlo de manera efectiva para mejorar tu desarrollo y las posibilidades de éxito.',
        date: '19/06/2023',
        img: postPer1,
        category: 'personalGrowth',
        post: `
            <p>Al establecer metas claras y significativas, te das la oportunidad de superarte cada día y lograr tus aspiraciones más grandes. En este artículo, exploraremos la importancia del establecimiento de metas y brindaremos consejos prácticos sobre cómo puedes hacerlo de manera efectiva para mejorar tu desarrollo y las posibilidades de éxito.</p>
            <h3 style="font-size:24px;margin-top:12px;">Proporciona dirección y enfoque<h3/>
            <p>Establecer metas te brinda una dirección clara y un enfoque definido. Te ayuda a identificar lo que realmente deseas lograr y a crear un plan de acción para llegar allí. Sin metas, puedes sentirte perdido o estancado, sin un propósito claro en mente. Al definir tus metas, te otorgas un camin bien delimitado que te guiará hacia tus aspiraciones y te mantendrá en el camino correcto.</p>
            <h3 style="font-size:24px;margin-top:12px;">Medición del progreso<h3/>
            <p>El establecimiento de metas te permite medir tu progreso de manera objetiva. Puedes establecer marcadores de éxito a lo largo del camino para evaluar tu avance. Esto te brinda la oportunidad de celebrar tus logros y ajustar tu enfoque si es necesario. La capacidad de medir tu progreso te ayuda a mantener el rumbo y te permite evaluar qué está funcionando y qué áreas requieren más atención.</p>
            <h3 style="font-size:24px;margin-top:12px;">Planificación y organización<h3/>
            <p>El establecimiento de metas va de la mano con la planificación y la organización efectiva. Para alcanzar tus metas, necesitas desarrollar un plan detallado y establecer prioridades. Esto te obliga a evaluar tus recursos, establecer plazos realistas y tomar medidas concretas para avanzar hacia tus objetivos. La planificación y la organización te permiten maximizar tu tiempo y esfuerzo, aumentando así tu productividad.</p>
            <h3 style="font-size:24px;margin-top:12px;">Flexibilidad y adaptabilidad<h3/>
            <p>Aunque establecer metas es importante, también es crucial recordar que la vida está llena de cambios y sorpresas. Mantén una mente abierta y sé flexible en tu enfoque. A medida que avanzas hacia tus metas, es posible que surjan obstáculos inesperados o que descubras nuevos caminos que pueden ser más adecuados para ti. Ajusta tus metas según sea necesario y aprovecha las oportunidades que se presenten en el camino.</p>
        `,
        lectureMinutes: '5 minutos de lectura'
    },
    {
        id: '76259a41-0003-6ac3c88905e4',
        title: 'Inteligencia artificial que transforma PDFs y URLs en conocimiento interactivo',
        description : 'En este artículo, exploraremos una IA revolucionaria que permite cargar PDFs y URLs de sitios web, y a partir de esa información, genera contexto y permite a los usuarios hacer preguntas relacionadas con esos datos. Esta tecnología promete transformar la forma en que interactuamos con la información y abre nuevas oportunidades para la toma de decisiones informada.',
        date: '17/04/2023',
        img: postIa1,
        category: 'artificialIntelligence',
        post: `
            <p>En este artículo, exploraremos una <a href="https://openchat.so/app" target="_blank" style="text-decoration:underline;color:blue;">IA revolucionaria<a/> que permite cargar PDFs y URLs de sitios web, y a partir de esa información, genera contexto y permite a los usuarios hacer preguntas relacionadas con esos datos. Esta tecnología promete transformar la forma en que interactuamos con la información y abre nuevas oportunidades para la toma de decisiones informada.</p>
            <h2 style="font-size:32px;margin-top:12px;">Contexto y comprensión de datos<h2/>
            <p>Una de las características más impresionantes de esta IA es su capacidad para establecer contexto y comprensión. Al cargar un PDF o una URL, el sistema procesa el contenido y crea un modelo contextual en tiempo real. Esto significa que la IA puede identificar y capturar relaciones, entidades y conceptos clave dentro del documento o la página web, generando así un marco de conocimiento interactivo.</p>
            <h2 style="font-size:32px;margin-top:12px;">Preguntas y respuestas interactivas<h2/>
            <p>Una vez que el contexto ha sido establecido, los usuarios tienen la capacidad de hacer preguntas relacionadas con los datos extraídos. La IA puede responder a preguntas específicas, proporcionando información precisa y relevante. Ya sea que necesites buscar datos estadísticos en un informe, detalles específicos en un manual técnico o datos históricos en un artículo académico, esta IA ofrece una forma rápida y eficiente de obtener respuestas.</p>
            <h2 style="font-size:32px;margin-top:12px;">¿Qué beneficios o aplicaciones tiene?<h2/>
            <h3 style="font-size:24px;margin-top:12px;">Ahorro de tiempo y esfuerzo:<h3/>
            <div style="display:flex;align-items:center;column-gap:12px;">
                <img src="https://i.postimg.cc/Prq7sZgf/Numero1.png" alt="tailwind" style="width:50%;"/>
                <p>
                    La capacidad de extraer datos y hacer preguntas directamente sobre ellos ahorra tiempo y esfuerzo en la búsqueda manual de información relevante.
                <p/>
            </div>
            <h3 style="font-size:24px;margin-top:12px;">Toma de decisiones informada:<h3/>
            <div style="display:flex;align-items:center;column-gap:12px;">
                <p>
                    Esta IA brinda a los usuarios la posibilidad de tomar decisiones más informadas al tener acceso rápido a datos y obtener respuestas claras a sus preguntas.
                </p>
                <img src="https://i.postimg.cc/HkyBdtBm/Numero2.png" alt="tailwind" style="width:50%;"/>
            </div>
            <h3 style="font-size:24px;margin-top:12px;">Investigación y análisis:<h3/>
            <div style="display:flex;align-items:center;column-gap:12px;">
                <img src="https://i.postimg.cc/hGwmvFj3/Numero3.png" alt="tailwind" style="width:50%;"/>
                <p>
                    Investigadores, académicos y profesionales pueden utilizar esta IA para analizar grandes cantidades de información y obtener información valiosa para sus estudios y proyectos.
                <p/>
            </div>
            <h3 style="font-size:24px;margin-top:12px;">Automatización de tareas:<h3/>
            <div style="display:flex;align-items:center;column-gap:12px;">
                <p>
                    La IA puede ser integrada en flujos de trabajo automatizados, lo que permite una extracción rápida y precisa de datos relevantes para diversas aplicaciones.
                </p>
                <img src="https://i.postimg.cc/VkJL6JCm/Numero4.png" alt="tailwind" style="width:50%;"/>
            </div>
        `,
        lectureMinutes: '5 minutos de lectura'
    },
]

export const video = [
    {
        id: crypto.randomUUID(10),
        title: 'Quien soy como profesional',
        paragraph : 'En este video, me presento como profesional destacado en mi campo. Compartiré mis logros, habilidades y consejos para inspirarte en tu propio camino. Acompáñame en esta emocionante aventura de crecimiento y aprendizaje. Juntos, alcanzaremos el éxito profesional. ¡No te lo pierdas!',
        date: '24/05/2023',
        img: video1,
        category: 'short',
        url: 'https://youtu.be/oTd7mWkvd2Q'
    },
    {
        id: crypto.randomUUID(10),
        title: 'Portfolio - Mini MVP',
        paragraph : 'Descubre mi mini portfolio personal en este video. Explora algunas de las funcionalidades que tendrá. Te explico las secciones que tiene y que tendrá en un futuro muy cercano. Tales como, traductor, animaciones, etc. ¡Sorpréndete con mi creatividad y atención al detalle! ¡Suscríbete para más actualizaciones!',
        date: '06/06/2023',
        img: video2,
        category: 'video',
        url: 'https://youtu.be/QK5UdMAbNdI'
    },
    {
        id: crypto.randomUUID(10),
        title: 'Tarjeta de AirBnb',
        paragraph : 'En este video, te enseño de manera fácil, accesible y sencilla cómo hacer el maquetado de una card de Airbnb utilizando HTML y CSS. Doy consejos útiles y muy productivos para mejorar tus habilidades en el desarrollo y maquetado web. ¡Suscríbete para más contenido de diseño y programación!',
        date: '12/06/2023',
        img: video3,
        category: 'video',
        url: 'https://youtu.be/Uod17F7vRvI'
    },
]

const Blog = () => {  

    const [posts, setPosts] = useState([])
    const [postsFilter, setPostsFilter] = useState([])
    const [videos, setVideos] = useState([])
    const [videosFilter, setVideosFilter] = useState([])
    const {i18n} = useTranslation()
    const [isHidden, setIsHidden] = useState(true)
    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(() => {
        setPosts(post)
        setPostsFilter(post)
        setVideos(video)
        setVideosFilter(video)

    }, [])

    useEffect(() => {
        if (i18n.language === 'en') {
            setIsHidden(false)
            setIsSuccess(false)
            i18n.changeLanguage("es")
        }
    })
    
    const handlePosts = (category) => {
        if(category === '') return setPostsFilter(post) 

        let postsForCategory =  posts.filter(post => post.category === category)
        setPostsFilter(postsForCategory)
    }

    const handleVideos = (category) => {
        if(category === '') return setVideosFilter(video) 

        let postsForCategory = videos.filter(video => video.category === category)
        setVideosFilter(postsForCategory)
    }

    return(
        <div className="py-12 bg-gradient-to-r from-white/5 to-green-600/5">
            <div className="max-w-[1280px] m-auto px-8 lg:px-24 flex flex-col gap-y-16">
                <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-y-8">
                    <div className='font-bold self-start'>
                        <h1 className="text-white xl:text-4xl text-xl md:text-5xl">Blog<b className="font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-400 to-green-600"> personal</b></h1>
                        <div className="h-[4px] lg:h-2 bg-green-600 w-1/4 lg:w-1/5 mt-4"></div>
                    </div>
                    <ul className="self-start text-sm md:text-base gap-x-2 lg:gap-x-6 flex flex-wrap items-center gap-y-4 lg:justify-between text-white">
                        <button className="py-2 px-4 flex gap-x-2 items-center rounded-xl bg-white/5 hover:bg-white/10 hover:cursor-pointer"
                        onClick={() => handlePosts('')}>
                            <span>Todos</span>
                            <BsPencilSquare></BsPencilSquare>
                        </button>
                        <button className="py-2 px-4 flex gap-x-2 items-center rounded-xl bg-white/5 hover:bg-white/10 hover:cursor-pointer"
                        onClick={() => handlePosts('personalGrowth')}> <span>Crecimiento Personal</span> <MdOutlineNature></MdOutlineNature></button>
                        <button className="py-2 px-4 flex gap-x-2 items-center rounded-xl bg-white/5 hover:bg-white/10 hover:cursor-pointer"
                        onClick={() => handlePosts('artificialIntelligence')}> <span>Inteligencia Artificial</span> <AiOutlineNodeExpand></AiOutlineNodeExpand></button>
                        <button className="py-2 px-4 flex gap-x-2 items-center rounded-xl bg-white/5 hover:bg-white/10 hover:cursor-pointer"
                        onClick={() => handlePosts('webDevelopment')}> <span>Desarrollo Web</span><DiCodeBadge></DiCodeBadge> </button>
                    </ul>
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
                <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-y-8">
                    <div className='font-bold self-start'>
                        <h1 className="text-white xl:text-4xl text-xl md:text-5xl">Videos <b className="font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-400 to-green-600">YouTube</b></h1>
                        <div className="h-[4px] lg:h-2 bg-green-600 w-1/4 lg:w-1/5 mt-4"></div>
                    </div>
                    <ul className="self-start text-sm md:text-base gap-x-2 lg:gap-x-6 flex flex-wrap items-center gap-y-4 lg:justify-between text-white">
                        <button 
                        onClick={() => handleVideos('')}
                        className="py-2 px-4 flex items-center gap-x-2 rounded-xl bg-white/5 hover:bg-white/10 hover:cursor-pointer"><span>Todos</span> <AiOutlineYoutube></AiOutlineYoutube></button>
                        <button 
                        onClick={() => handleVideos('video')}
                        className="py-2 px-4 flex items-center gap-x-2 rounded-xl bg-white/5 hover:bg-white/10 hover:cursor-pointer"><span>Videos</span> <FiVideo></FiVideo></button>
                        <button 
                        onClick={() => handleVideos('short')}
                        className="py-2 px-4 flex items-center gap-x-2 rounded-xl bg-white/5 hover:bg-white/10 hover:cursor-pointer"><span>Cortos</span> <FiVideoOff></FiVideoOff></button>
                        
                    </ul>
                </div>
                <div className='flex flex-col md:flex-row flex-wrap justify-between gap-y-8'>
                    {
                        videosFilter ? 
                        videosFilter?.map((video) => {
                            return <CardVideos title = {video.title} paragraph = {video.paragraph} date = {video.date} img = {video.img} category = {video.category} url = {video.url} key={video.id} id={video.id}></CardVideos>
                        }) : 
                        'Loading'
                    }
                </div>
            </div>
            <Alert isSuccess={isSuccess} isHidden={isHidden} setIsHidden = {setIsHidden} titleSuccess={`¡Muchas gracias por contactarme!`} titleError={`I'm sorry!`} textSuccess={`Hola! Te estaré respondiendo a la brevedad.`} textError={`Translation not yet available.`}/>
        </div>
    )
}

export default Blog;
