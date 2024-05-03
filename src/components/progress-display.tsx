import React from 'react'

const ProgressDisplay:React.FC<{progress:number}> = ({progress}) => {
  return (
    <div className='w-full bg-gray-200 rounded-full h-2.5' >
      <div className='bg-green-500 h-2.5 rounded'
        style={{ width: `${progress}%` }}>

      </div>
    </div>
  )
}

export default ProgressDisplay