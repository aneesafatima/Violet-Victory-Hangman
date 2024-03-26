import React from 'react'

function FinalMessage() {
  return (
    <div className="h-screen flex justify-center items-center">
    <div className='bg-[#438ec7] text-center w-[50vw] py-3 px-3 text-white font-medium shadow-lg space-y-2'>
      <span className='font-bold '>Unfortunately you lost 😕</span> <br />
      ...the word was : wizard
      <button className='bg-white text-[#2980b9] font-normal px-3 py-1.5 active:scale-[0.98]'>Play again</button>
    </div></div>
  )
}

export default FinalMessage
