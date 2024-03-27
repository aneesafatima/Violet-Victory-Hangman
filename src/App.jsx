import { useEffect, useContext} from 'react'
import Header from './components/Header'
import InputBox from './components/InputBox'
import FigureParts from './components/FigureParts'
import WrongLetters from './components/WrongLetters'
import DisplayWord from './components/DisplayWord'
import FinalMessage from './components/FinalMessage'
import {MyContext} from './GlobalState'




function App() {
  const {playable, correctLetters, wrongLetters, selectedWord, setCorrectLetters, setWrongLetters} = useContext(MyContext);
  useEffect(()=>{
    const update = (e) => {
    let {key,keyCode} = e;
    key = key.toUpperCase();
    if(playable)
    {
     if(keyCode>=65 && keyCode<=96)
     {
      if(selectedWord.includes(key))
      {
        if(!correctLetters.includes(key))
          setCorrectLetters([...correctLetters, letter])
      }
     }
    }

    }
  })



  return (
    
    <div className="bg-[#497285] h-screen relative">
      <Header/>
      <InputBox/>
      <div className="flex justify-around pr-3 py-5">
        <FigureParts/>
        <WrongLetters/>
      </div>
      <DisplayWord selectedWord={selectedWord}/>
      <div className="absolute top-0 w-full hidden"><FinalMessage/></div>
    </div>
  )
}

export default App
