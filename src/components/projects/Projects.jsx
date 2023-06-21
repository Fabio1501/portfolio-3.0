import React, { useState } from 'react';
import Card from './Card';
import { useTranslation } from "react-i18next";

import neuronaHome from "../../assets/projects/neurona/neurona-home.png"
import neuronaServices from "../../assets/projects/neurona/neurona-services.png"
import neuronaProjects from "../../assets/projects/neurona/neurona-projects.png"
import neuronaTeam from "../../assets/projects/neurona/neurona-team.png"
import neuronaaAboutUs from "../../assets/projects/neurona/neurona-aboutus.png"
import neuronaContact from "../../assets/projects/neurona/neurona-contact.png"

import mercadoSolidarioHome from "../../assets/projects/mercadosolidario/mercadosolidario-home.png"
import mercadoSolidarioNosotros from "../../assets/projects/mercadosolidario/mercadosolidario-nosotros.png"
import mercadoSolidarioReviews from "../../assets/projects/mercadosolidario/mercadosolidario-reviews.png"
import mercadoSolidarioEquipo from "../../assets/projects/mercadosolidario/mercadosolidario-equipo.png"
import mercadoSolidarioaIniciativas from "../../assets/projects/mercadosolidario/mercadosolidario-iniciativas.png"
import mercadoSolidarioDashboard from "../../assets/projects/mercadosolidario/mercadosolidario-dashboard.png"
import mercadoSolidarioCausas from "../../assets/projects/mercadosolidario/mercadosolidario-causas.png"

import piHome from "../../assets/projects/pi/pi-home.png"
import piCards from "../../assets/projects/pi/pi-cards.png"
import piDetail from "../../assets/projects/pi/pi-detail.png"
import piCreate1 from "../../assets/projects/pi/pi-create1.png"
import piCreate2 from "../../assets/projects/pi/pi-create2.png"

import mandalaHome from "../../assets/projects/mandala/mandala-home.png"
import mandalaAboutUs from "../../assets/projects/mandala/mandala-aboutus.png"
import mandalaServices from "../../assets/projects/mandala/mandala-services.png"
import mandalaContact from "../../assets/projects/mandala/mandala-contact.png"

import neuronaMobile from "../../assets/projects/neurona/neurona-mobile-home.png"
import neuronaMobile2 from "../../assets/projects/neurona/neurona-mobile-2.png"
import neuronaMobile3 from "../../assets/projects/neurona/neurona-mobile-3.png"
import neuronaMobile4 from "../../assets/projects/neurona/neurona-mobile-4.png"
import neuronaMobile5 from "../../assets/projects/neurona/neurona-mobile-5.png"
import neuronaMobile6 from "../../assets/projects/neurona/neurona-mobile-6.png"
import neuronaMobile7 from "../../assets/projects/neurona/neurona-mobile-7.png"
import neuronaMobile8 from "../../assets/projects/neurona/neurona-mobile-8.png"
import neuronaMobile9 from "../../assets/projects/neurona/neurona-mobile-9.png"


import mercadoMobile1 from "../../assets/projects/mercadosolidario/mercadosolidario-mobile-home.png"
import mercadoMobile2 from "../../assets/projects/mercadosolidario/mercadosolidario-mobile-aboutus.png"
import mercadoMobile3 from "../../assets/projects/mercadosolidario/mercadosolidario-mobile-aboutus2.png"
import mercadoMobile4 from "../../assets/projects/mercadosolidario/mercadosolidario-mobile-3.png"
import mercadoMobile5 from "../../assets/projects/mercadosolidario/mercadosolidario-mobile-4.png"
import mercadoMobile6 from "../../assets/projects/mercadosolidario/mercadosolidario-mobile-5.png"
import mercadoMobile7 from "../../assets/projects/mercadosolidario/mercadosolidario-mobile-6.png"

import mandalaMobile1 from "../../assets/projects/mandala/mandala-design-mobile-1.png"
import mandalaMobile2 from "../../assets/projects/mandala/mandala-design-mobile-2.png"
import mandalaMobile3 from "../../assets/projects/mandala/mandala-design-mobile-3.png"
import mandalaMobile4 from "../../assets/projects/mandala/mandala-design-mobile-4.png"
import mandalaMobile5 from "../../assets/projects/mandala/mandala-design-mobile-5.png"
import mandalaMobile6 from "../../assets/projects/mandala/mandala-design-mobile-6.png"
import mandalaMobile7 from "../../assets/projects/mandala/mandala-design-mobile-7.png"


function Projects() {
  
  const [t, i18n] = useTranslation("projects")
  const projects = [
    {
      slides : [
          {
            url: neuronaHome,
          },
          {
            url: neuronaServices,
          },
          {
            url: neuronaProjects,
          },
      
          {
            url: neuronaTeam,
          },
          {
            url: neuronaaAboutUs,
          },
          {
            url: neuronaContact,
          },
      ],
      title: t("projects1.title"),
      date: t("projects1.date"),
      techs: [
        {
        icon : "FaReact",
        name : "React.js"
        },
        {
          icon : "SiTailwindcss",
          name : "Tailwind"
        },
        {
          icon : "FaNodeJs",
          name : "Node.js"
        },
        {
          icon : "SiMongodb",
          name : "MongoDB"
        },
        {
          icon : "SiExpress",
          name : "Express.js"
        }
      ],
      description: t("projects1.description"),
      urls: {
        deploy: "https://neurona.site/",
        repository: "https://github.com/neuronacorp/neurona"
      },
      mobile: true,
      mobileImages: [
        neuronaMobile,
        neuronaMobile2,
        neuronaMobile3,
        neuronaMobile4,
        neuronaMobile5,
        neuronaMobile6,
        neuronaMobile7,
        neuronaMobile8,
        neuronaMobile9
      ]
    },
    {
      slides : [
        {
          url: mercadoSolidarioHome,
        },
        {
          url: mercadoSolidarioDashboard,
        },
        {
          url:mercadoSolidarioEquipo,
        },
        {
          url: mercadoSolidarioaIniciativas,
        },
        {
          url: mercadoSolidarioNosotros,
        },
        {
          url: mercadoSolidarioReviews,
        },
        {
          url: mercadoSolidarioCausas,
        },
      ],
      title: t("projects2.title"),
      date: t("projects2.date"),
      techs: [
        {
        icon : "FaReact",
        name : "React.js"
        },
        {
          icon : "SiTailwindcss",
          name : "Tailwind"
        },
        {
          icon : "FaNodeJs",
          name : "Node.js"
        },
        {
          icon : "SiMongodb",
          name : "MongoDB"
        },
        {
          icon : "SiExpress",
          name : "Express.js"
        }
      ],
      description: t("projects2.description"),
      urls: {
        deploy: "https://neurona.site/",
        repository: "https://github.com/neuronacorp/neurona"
      },
      mobile: true,
      mobileImages: [
        neuronaMobile,
        neuronaMobile2,
        neuronaMobile3,
        neuronaMobile4,
        neuronaMobile5,
        neuronaMobile6,
        neuronaMobile7,
        neuronaMobile8,
        neuronaMobile9
      ]
    },
    {
      slides : [
        {
          url: mercadoSolidarioHome,
        },
        {
          url: mercadoSolidarioDashboard,
        },
        {
          url:mercadoSolidarioEquipo,
        },
        {
          url: mercadoSolidarioaIniciativas,
        },
        {
          url: mercadoSolidarioNosotros,
        },
        {
          url: mercadoSolidarioReviews,
        },
        {
          url: mercadoSolidarioCausas,
        },
      ],
      title: t("projects3.title"),
      date: t("projects3.date"),
      techs: [
        {
        icon : "FaReact",
        name : "React.js"
        },
        {
          icon : "SiTailwindcss",
          name : "Tailwind"
        },
        {
          icon : "FaNodeJs",
          name : "Node.js"
        },
        {
          icon : "SiMongodb",
          name : "MongoDB"
        },
        {
          icon : "SiPrisma",
          name : "PrismaORM"
        }
      ],
      description: t("projects3.description"),
      urls: {
        deploy: "https://mercadosolidario.vercel.app/",
        repository: "https://github.com/fabio1501/mercadosolidario"
      },
      mobile: true,
      mobileImages: [
        mercadoMobile1,
        mercadoMobile2,
        mercadoMobile3,
        mercadoMobile4,
        mercadoMobile5,
        mercadoMobile6,
        mercadoMobile7
      ]
    },
    {
      slides : [
        {
          url: piHome,
        },
        {
          url: piCards,
        },
        {
          url: piDetail,
        },
        {
          url: piCreate1,
        },
        {
          url: piCreate2,
        },
      ],
      title: t("projects4.title"),
      date: t("projects4.date"),
      techs: [
        {
        icon : "FaReact",
        name : "React.js"
        },
        {
          icon : "TbBrandCss3",
          name : "CSS"
        },
        {
          icon : "FaNodeJs",
          name : "Node.js"
        },
        {
          icon : "SiPostgresql",
          name : "PostgreSQL"
        },
        {
          icon : "SiExpress",
          name : "Express.js"
        }
      ],
      description: t("projects4.description"),
      urls: {
        deploy: "https://pi-flame.vercel.app/",
        repository: "https://github.com/Fabio1501/PI"
      },
      mobile: false,
      mobileImages: [
        neuronaMobile,
        neuronaMobile2,
        neuronaMobile3,
        neuronaMobile4,
        neuronaMobile5,
        neuronaMobile6,
        neuronaMobile7,
        neuronaMobile8,
        neuronaMobile9
      ]
    },
    {
      slides : [
        {
          url: mandalaHome,
        },
        {
          url: mandalaAboutUs,
        },
        {
          url: mandalaContact,
        },
        {
          url: mandalaServices,
        }
      ],
      title: t("projects5.title"),
      date: t("projects5.date"),
      techs: [
        {
          icon : "SiHtml5",
          name : "HTML5"
        },
        {
          icon : "TbBrandCss3",
          name : "CSS"
        },
        {
          icon : "SiJavascript",
          name : "JavaScript"
        }
      ],
      description: t("projects5.description"),
      urls: {
        deploy: "https://mandala-design.vercel.app/",
        repository: "https://github.com/Fabio1501/MandalaDesign"
      },
      mobile: true,
      mobileImages: [
        mandalaMobile1,
        mandalaMobile2,
        mandalaMobile3,
        mandalaMobile4,
        mandalaMobile5,
        mandalaMobile6,
        mandalaMobile7
      ]
    },
  ]

  return (
    <div className='py-6 xl:py-24 w-full'>
      <div className='flex flex-col max-w-[1280px] mx-auto px-8 xl:px-24'>
        <div className='font-bold self-start'>
          <span className="text-sm text-green-300 mb-4 md:text-xl font-normal">PROYECTOS</span>
          <h1 className="text-white xl:text-4xl text-xl md:text-5xl">Portafolios <b className="font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-400 to-green-600">personal</b></h1>
          <div className="h-[4px] lg:h-2 bg-green-600 w-1/4 lg:w-1/5 mt-4"></div>
        </div>
      </div>
      <div className='flex max-w-[1280px] px-8 xl:px-24 mx-auto gap-16 py-16 flex-wrap'>
        
        {
          projects?.map((project, index) => {
            return(
              <Card key={index++} slides = {project.slides} techs={project.techs} title = {project.title} date = {project.date} description = {project.description} urls = {project.urls} mobile = {project.mobile} mobileImages = {project.mobileImages}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default Projects;