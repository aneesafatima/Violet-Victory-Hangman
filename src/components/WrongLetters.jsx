import React from 'react'

function WrongLetters({wrongLetters}) {
  return (
   <div className='text-gray-400 font-medium'>
    <span>{wrongLetters.length == 0 ? null : `Wrong : ${wrongLetters.reduce((acc, currentValue) => acc + currentValue + ',' , '')}`}</span>
   </div>
  )
}

export default WrongLetters
