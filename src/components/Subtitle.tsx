import { FastForward, LucideArrowRightToLine } from 'lucide-react'
import React from 'react'

function Subtitle({titre,color}) {
  return (
    <div className='subtitle'>
        <h4 className={`flex text-[.9rem] font-medium items-center gap-1 ${color}`}> 
          <FastForward className={color} size={15} />
          {titre}</h4>
    </div>
  )
}

export default Subtitle