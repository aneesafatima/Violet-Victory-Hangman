import React, {startTransition, useContext} from 'react'
import {checkWin, reset} from '../helpers/helper';
import {MyContext} from '../GlobalState'
function FinalMessage(){
    const {correctLetters, wrongLetters, setPlayable, setCorrectLetters, setWrongLetters, selectedWord, setSelectedWord} = useContext(MyContext)
    const status = checkWin(correctLetters, wrongLetters, selectedWord);
    if(status == 'win' || status == 'lose')
    setPlayable(false);
   
   return (
    <div className={`h-screen flex justify-center items-center ${status === '' ? 'hidden' : 'block'}`}>
    <div className='bg-[#352f44] text-center sm:w-[40vw] lg:w-[35vw] w-[70vw] md:w-[50vw] py-3 sm:py-8 px-3  text-white font-medium shadow-lg  xl:py-7'>
      <span className='font-bold text-xl md:text-3xl block'>{ status ==='win' ? 'You won 😊' : 'Unfortunately you lost 😕'}</span> <br />
     <span className='md:text-lg block' > {status === 'lose' ? `...the word was : ${selectedWord}` : `You guessed it correct`} </span>
      <button className='bg-white text-[#352f44] font-bold px-1 xxs:px-3 py-1.5 active:scale-[0.98] md:py-3 mt:5  xxs:mt-10 w-1/2' onClick={() => reset(setCorrectLetters, setWrongLetters, setPlayable, setSelectedWord)}>Play again</button>
    </div></div>
  )
}

export default FinalMessage;
