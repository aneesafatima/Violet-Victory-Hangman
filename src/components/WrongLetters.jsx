import React from 'react'

function WrongLetters({wrongLetters}) {
  const length = wrongLetters.length;
  const isLastLetter = (index) =>{
if(index === 5)
return true;
  }
  return (
   <div className='text-gray-400 font-medium'>
    <span>{
      wrongLetters.length === 0 ? null : 
      `Wrong : ${wrongLetters.map((letter, index) => {
        if(index <= length - 1 || index === 5)
        return letter;
        else if(!isLastLetter && index === length - 1)
        return letter + ',';
      })}`
      }
      </span>
   </div>
  )
}
export default WrongLetters
