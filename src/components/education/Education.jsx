import React, { useState } from 'react';
import Card from "./Card";
import { useTranslation } from "react-i18next";

import certificadoHenry from '../../assets/experience/certificado-henry.png'
import certificadoTa from '../../assets/experience/certificado-TA.jpeg'

import alvaro from '../../assets/experience/alvaro.png'
import bauti from '../../assets/experience/bauti.jpg'
import jonathan from '../../assets/experience/jonathan.png'
import delwin from '../../assets/experience/delwin.png'
import gustavo from '../../assets/experience/gustavo.png'
import juli from '../../assets/experience/juli.png'


const Education = () => {
    const [t, i18n] = useTranslation("projects")
    
    const education = [
        {
            title: t("education.henryDev.title"),
            name: t("education.henryDev.name"),
            date: t("education.henryDev.date"),
            description: t("education.henryDev.description"),
            certificate: certificadoHenry,
            btn: true
        },
        {
            title: t("education.henryTa.title"),
            name: t("education.henryTa.name"),
            date: t("education.henryTa.date"),
            description: t("education.henryTa.description"),
            certificate: certificadoTa,
            btn: true
        },
        {
            title: t("education.ingenieriaSist.title"),
            name: t("education.ingenieriaSist.name"),
            date: t("education.ingenieriaSist.date"),
            description: t("education.ingenieriaSist.description"),
            certificate: certificadoHenry,
            btn: false
        },
    ]

    const experience = [
        {
            title: t("experience.neurona.title"),
            name: t("experience.neurona.name"),
            date: t("experience.neurona.date"),
            description: t("experience.neurona.description"),
            reviews: [
                {
                    image: alvaro,
                    name: t("experience.neurona.reviews.alvaro.name"),
                    profession: t("experience.neurona.reviews.alvaro.profession"),
                    linkedin: t("experience.neurona.reviews.alvaro.linkedin"),
                    description: t("experience.neurona.reviews.alvaro.description")
                },
                {
                    image: bauti,
                    name: t("experience.neurona.reviews.bauti.name"),
                    profession: t("experience.neurona.reviews.bauti.profession"),
                    linkedin: t("experience.neurona.reviews.bauti.linkedin"),
                    description: t("experience.neurona.reviews.bauti.description")
                },
                {
                    image: jonathan,
                    name: t("experience.neurona.reviews.jonathan.name"),
                    profession: t("experience.neurona.reviews.jonathan.profession"),
                    linkedin: t("experience.neurona.reviews.jonathan.linkedin"),
                    description: t("experience.neurona.reviews.jonathan.description")
                }
            ],
            btn: true
        },
        {
            title: t("experience.mercadoSolidario.title"),
            name: t("experience.mercadoSolidario.name"),
            date: t("experience.mercadoSolidario.date"),
            description: t("experience.mercadoSolidario.description"),
            reviews: [
                {
                    image: delwin,
                    name: t("experience.mercadoSolidario.reviews.delwin.name"),
                    profession: t("experience.mercadoSolidario.reviews.delwin.profession"),
                    linkedin: t("experience.mercadoSolidario.reviews.delwin.linkedin"),
                    description: t("experience.mercadoSolidario.reviews.delwin.description")
                },
                // {
                //     image: gustavo,
                //     name: t("experience.mercadoSolidario.reviews.gustavo.name"),
                //     profession: t("experience.mercadoSolidario.reviews.gustavo.profession"),
                //     linkedin: t("experience.mercadoSolidario.reviews.gustavo.linkedin"),
                //     description: t("experience.mercadoSolidario.reviews.gustavo.description")
                // },
                {
                    image: juli,
                    name: t("experience.mercadoSolidario.reviews.juli.name"),
                    profession: t("experience.mercadoSolidario.reviews.juli.profession"),
                    linkedin: t("experience.mercadoSolidario.reviews.juli.linkedin"),
                    description: t("experience.mercadoSolidario.reviews.juli.description")
                }
            ],
            btn: true
        },
        {
            title: t("experience.mandala.title"),
            name: t("experience.mandala.name"),
            date: t("experience.mandala.date"),
            description: t("experience.mandala.description"),
            reviews: [
                {
                    image: alvaro,
                    name: t("experience.mandala.reviews.alvaro.name"),
                    profession: t("experience.mandala.reviews.alvaro.profession"),
                    linkedin: t("experience.mandala.reviews.alvaro.linkedin"),
                    description: t("experience.mandala.reviews.alvaro.description")
                },
                {
                    image: bauti,
                    name: t("experience.mandala.reviews.bauti.name"),
                    profession: t("experience.mandala.reviews.bauti.profession"),
                    linkedin: t("experience.mandala.reviews.bauti.linkedin"),
                    description: t("experience.mandala.reviews.bauti.description")
                },
                {
                    image: jonathan,
                    name: t("experience.mandala.reviews.jonathan.name"),
                    profession: t("experience.mandala.reviews.jonathan.profession"),
                    linkedin: t("experience.mandala.reviews.jonathan.linkedin"),
                    description: t("experience.mandala.reviews.jonathan.description")
                }
            ],
            btn: false
        },
    ]

    return(
        <div className="py-12 bg-gradient-to-r from-white/5 to-green-600/5">
            <div className="max-w-[1280px] m-auto px-8 lg:px-24 flex flex-col gap-y-8 lg:flex-row gap-x-8">
                <div className="flex flex-col items-center justify-between gap-y-8">
                    <h2 className="self-start text-white text-3xl font-bold">{t("education.title")}</h2>
                    {
                        education?.map((institute, index) => {
                            return <Card key={index++} isEducation={true} title = {institute.title} name = {institute.name} date = {institute.date} description = {institute.description} certificate = {institute.certificate} btn = {institute.btn}/>
                        }) 
                    }
                </div>
                <div className="flex flex-col items-center justify-between gap-y-8">
                    <h2 className="lg:ml-[56px] self-start text-white text-3xl font-bold">{t("experience.title")}</h2>
                    {
                        experience.map((institution, index) => {
                            return <Card key={index++} title = {institution.title} name = {institution.name} date = {institution.date} description = {institution.description} reviews = {institution.reviews} btn = {institution.btn}/>
                        }) 
                    }
                </div>
            </div>
        </div>
    )
}

export default Education; 
