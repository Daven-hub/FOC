import React from 'react'
import Subtitle from './Subtitle'
import datas from "@/data/events.json"
import { NavLink } from 'react-router-dom'
import { ArrowRight, Locate, MoveRight } from 'lucide-react'

function Events() {
  return (
    <div className='flex my-10 md:mt-0 md:my-20 px-[6%] flex-col justify-center items-center gap-1'>
      <Subtitle titre={"Nos Évènements"} color={"text-foc-blue"} />
      <h1 className='text-[1.6rem] md:text-[2.4rem] font-bold text-gray-700 leading-[1.1]'>Nos Évènements à venir</h1>
      <div className='grid grid-cols-1 w-full md:grid-cols-3 mt-6 gap-5'>
        {datas.slice(0, 3).map((item, index) =>
          <NavLink to={"/events/"+item.title} className='shadow group border h-[310px] w-full relative rounded-[3px] overflow-hidden flex flex-col'>
            <div className="absolute w-full h-full aspect-square inset-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 md:via-black/65 to-transparent" />
              {/* <div className="absolute inset-0 bg-gradient-to-r from-foc-blue/100 via-foc-blue/50 to-foc-blue/60" /> */}
              <div className="absolute inset-0 bg-black/50 md:bg-transparent" />
            </div>
            {/* <img className=' w-full h-[250px] object-cover' src={item.image} alt='' /> */}
            <div className='absolute flex flex-col gap-1 justify-center items-center w-full bottom-3.5 px-4 z-10'>
              <span className='bg-white/80 text-black/80 rounded-[5px] px-3 py-1 font-bold text-[.7rem]'>{item.date}</span>
              <p className='text-white/75 m-0 flex items-center gap-1 font-medium text-[.85rem]'><Locate size={15}/>{item.lieu}</p>
              <h3 className='text-[.9rem] transition-all duration-300 group-hover:underline uppercase text-white text-center font-medium'>{item.sigle === "" ? item.title : item.sigle}</h3>
              {/* <span className='truncate-multi'>{item.descript}</span> */}
            </div>
          </NavLink>
        )}
      </div>
      <NavLink to={"/evenements"} className="group mt-4 w-full uppercase justify-center items-center md:w-fit text-[.78rem] font-bold flex gap-1.5 text-foc-blue transition-all duration-500 hover:text-foc-red  hover:bg-white">Voir plus d'évènements <MoveRight className='transition-all duration-500 group-hover:translate-x-[50%]' /> </NavLink>
    </div>
  )
}

export default Events