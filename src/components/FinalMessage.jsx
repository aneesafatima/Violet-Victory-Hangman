import React, {useContext} from 'react'
import {checkWin, reset} from '../helpers/helper';
import {MyContext} from '../GlobalState'
function FinalMessage(){
    const {correctLetters, wrongLetters, setPlayable, setCorrectLetters, setWrongLetters, selectedWord, setSelectedWord} = useContext(MyContext)
    const status = checkWin(correctLetters, wrongLetters, selectedWord);
    if(status === 'win') setPlayable(false);
   return (
    <div className={`h-screen flex justify-center items-center ${status === '' ? 'hidden' : 'block'}`}>
    <div className='bg-[#438ec7] text-center w-[30vw] sm:w-[80vw] py-7 px-3 flex flex-col text-white font-medium shadow-lg space-y-3'>
      <span className='font-bold text-xl'>{ status ==='win' ? 'You won 😊' : 'Unfortunately you lost 😕'}</span> <br />
     <span> {status === 'lose' ? `...the word was : ${selectedWord}` : `You guessed it correct`} </span>
      <button className='bg-white text-[#2980b9] font-normal px-3 py-1.5 active:scale-[0.98]' onClick={() => reset(setCorrectLetters, setWrongLetters, setPlayable, setSelectedWord, selectedWord)}>Play again</button>
    </div></div>
  )
}

export default FinalMessage;
