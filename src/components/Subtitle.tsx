import { LucideArrowRightToLine } from 'lucide-react'
import React from 'react'

function Subtitle({titre,color}) {
  return (
    <div className='subtitle'>
        <h4 className={`flex text-sm font-bold items-center gap-1.5 ${color}`}> 
          <LucideArrowRightToLine size={15} />
          {titre}</h4>
    </div>
  )
}

export default Subtitle