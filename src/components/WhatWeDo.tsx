import React from 'react'
import Subtitle from './Subtitle'
import OptimizedImage from './OptimizedImage'
import { CheckCircle, Layers2, PersonStanding } from 'lucide-react'

function WhatWeDo() {

    const data = [
        {
            icon: <Layers2 size={30}/>,
            libele: "Recherche de cadres pour les meilleurs talents de leadership"
        },
        {
            icon: <PersonStanding size={30}/>,
            libele: "Engagement et rétention des employés"
        }
    ]
    const datas = [
        "Acquisition de talents sur mesure pour la réussite de l'entreprise",
        "Assurer l'excellence en matière de conformité et de gestion des risques",
        "Services précis d'administration de la paie et des avantages sociaux"
    ]
    return (
        <section className='grid grid-cols-1 md:grid-cols-2'>
            <div className='bg-foc-red px-[6%] md:px-[7%] max-md:order-2 py-10 md:py-20 space-y-4'>
                <Subtitle titre={'Ce que nous faisons'} color={"text-white"} />
                <h1 className='text-[1.6rem] md:text-[2.4rem] font-bold text-white leading-[1.2]'>Tranformer les équipes avec des solutions de ressources humaines personnalisées</h1>
                <p className='text-[1rem] md:text-[1.1rem] text-white/80'>Nous fournissons des services RH personnalisés qui améliorent la gestion des talents, stimulent les performances et favorisent une culture de travail positive pour un succès commercial durable.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pt-2 md:pt-4 pb-10 border-b border-white/20'>
                    {data.map((item, index) =>
                        <div key={index} className='flex items-center text-[1rem] md:text-[.92rem] text-white gap-2.5 md:gap-2'>
                            <div className='h-[55px] flex items-center justify-center text-foc-red-dark align-middle w-[55px] bg-white/40 rounded-full'>{item.icon}</div> <span className='w-[calc(100%-55px)]'>{item.libele}</span>
                        </div>
                    )}
                </div>
                <ul className='flex flex-col pt-5 md:pt-7 gap-4'>
                    {datas.map((x, index) =>
                        <li key={index} className='text-white/90 text-[1rem]'><CheckCircle size={20} className='text-green-400 inline align-middle  mr-2' />{x}</li>
                    )}
                </ul>
            </div>
            <div className='relative max-md:h-[230px] w-full'>
                <OptimizedImage
                    src="/uploads/whatwedo.jpg"
                    alt="ce_que_nous_proposons.jpg"
                    className="absolute w-full h-full object-cover"
                    width={1000}
                    height={1000}
                />
            </div>
        </section>
    )
}

export default WhatWeDo