import React from 'react'

function DisplayWord({selectedWord, correctLetters}) {
 
  return (
    <div className='space-x-5 flex justify-center mt-10 text-gray-100 font-medium'>
     
      { 
        selectedWord.split('').map((el , key) => {
          return (
            <span className='border-b-2 border-gray-400 px-2' key={key}>{
              correctLetters.includes(el) ? el : ''
            }</span>
          )
        })
      }
      
    </div>
  )
}

export default DisplayWord;
