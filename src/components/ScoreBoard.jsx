import React, {useContext} from 'react'

import { resetBtn } from '../helpers/helper';
function ScoreBoard({ score, setScore }) {
  return (
 <div className='flex justify-center'><div className='w-[20vw] sm:w-[16vw] lg:w-[10vw] font-bold bg-[#f9f9f9] py-2 sm:py-4 text-2xl sm:text-4xl text-center text-[#2a2438]'>
   {score}
   </div>
   <button className='w-[20vw] sm:w-[16vw] lg:w-[10vw] font-semibold bg-[#5c5470] text-white  sm:py-4 text-lg sm:text-2xl text-center tracking-wide active:bg-[#524a64]' onClick={() => resetBtn(setScore)} type='reset'>
   Reset
   </button></div> 
  )
}

export default ScoreBoard;
