import React from 'react'

function DisplayWord({selectedWord, correctLetters}) {
 
  return (
    <div className='space-x-3 flex justify-center mt-3 text-md sm:text-2xl font-medium mx-2'>
     
      { 
        selectedWord.split('').map((el , key) => {
          return (
            <span className='border-b-2 border-gray-400 px-2 sm:px-3 text-[#352f44]' key={key}>{
              correctLetters.includes(el) ? el : ''
            }</span>
          )
        })
      }
      
    </div>
  )
}

export default DisplayWord;
