import { useState } from 'react'
import Header from './components/Header'
import InputBox from './components/InputBox'
import FigureParts from './components/FigureParts'
import WrongLetters from './components/WrongLetters'
import DisplayWord from './components/DisplayWord'
import FinalMessage from './components/FinalMessage'



function App() {
  return (
    <div className="bg-[#497285] h-screen relative">
      <Header/>
      <InputBox/>
      <div className="flex justify-around pr-3 py-5">
        <FigureParts/>
        <WrongLetters/>
      </div>
      <DisplayWord/>
      <div className="absolute top-0 w-full hidden"><FinalMessage/></div>
    </div>
  )
}

export default App
