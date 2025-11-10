import React from 'react'

const RightSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-6 text-textLight'>
      <a href="mailto:dafondeveloper@gmail.com">
        <p className='text-sm rotate-90 w-72 tracking-wide text-textGreen hover:text-textGreenHover transition-colors duration-300 font-medium'>Email contact</p>
      </a>
      <span className='w-[2px] h-32 bg-gradient-to-b from-textGreen/50 via-textGreen to-transparent inline-flex'></span>
    </div>
  )
}

export default RightSide