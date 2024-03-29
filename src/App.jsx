import { useEffect, useContext} from 'react'
import Header from './components/Header'
import InputBox from './components/InputBox'
import FigureParts from './components/FigureParts'
import WrongLetters from './components/WrongLetters'
import DisplayWord from './components/DisplayWord'
import FinalMessage from './components/FinalMessage'
import {MyContext} from './GlobalState'




function App() {
 let messageState;
  const {
    playable,
    correctLetters,
    wrongLetters,
    selectedWord,
    setCorrectLetters,
    setWrongLetters
  } = useContext(MyContext);
 
  useEffect(()=>{
    const handleKeydown = (e) => {
    let {key,keyCode} = e;
    key = key.toLowerCase();
    console.log(key)
    console.log(keyCode)
    if(playable)
    {
     if(keyCode>=65&& keyCode<=90)
     {
      if(selectedWord.includes(key)) //if selected word includes the key
      {
        if(!correctLetters.includes(key))
        {
          setCorrectLetters(correctLetters => [...correctLetters, key]);
          console.log(correctLetters);
        }
        
      }
      else if(!wrongLetters.includes(key))
      {
           setWrongLetters(wrongLetters => [...wrongLetters, key]);
           console.log(wrongLetters);
      }
     }
    }
    }
    if(correctLetters.length === selectedWord.length || wrongLetters.length ===6)
    messageState = 'block'
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  },[correctLetters, wrongLetters, playable])

  

  // useEffect(() => {
  //   console.log("Correct letters have been updated:", correctLetters); //why log twice
  // }, [correctLetters]);





  return (
    
    <div className="bg-[#497285] h-screen relative">
      <Header/>
      <InputBox/>
      <div className="flex justify-around pr-3 py-5">
        <FigureParts/>
        <WrongLetters wrongLetters={wrongLetters}/>
      </div>
      <DisplayWord selectedWord={selectedWord} correctLetters={correctLetters}/>
      <div className={`absolute hidden top-0 w-full ${messageState}`}><FinalMessage correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord}/></div>
    </div>
  )
}

export default App;
