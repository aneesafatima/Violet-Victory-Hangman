
import { useEffect, useContext, useState} from 'react'
import Header from './components/Header'
import ScoreBoard from './components/ScoreBoard'
import FigureParts from './components/FigureParts'
import WrongLetters from './components/WrongLetters'
import DisplayWord from './components/DisplayWord'
import FinalMessage from './components/FinalMessage'
import ShowNotification from './components/ShowNotification';
import {MyContext} from './GlobalState'
import {checkWin} from './helpers/helper'
const duplicateWord = new Audio('./src/Tunes/duplicate-word.mp3');



function App() {

  const{
    playable,
    correctLetters,
    wrongLetters,
    setCorrectLetters,
    setWrongLetters,
    selectedWord,
  } = useContext(MyContext);

  const [notificationStatus, setNotificationStatus] = useState('hide');
  const [score, setScore] = useState(0);
  
 
  useEffect(()=>
  {
    const handleKeydown = (e) => {
    let {key,keyCode} = e;
    key = key.toLowerCase();
    if(playable)
    {
     if(keyCode>=65 && keyCode<=90)
     {
      if(selectedWord.includes(key)) //if selected word includes the key
      {  
        if(!correctLetters.includes(key))
        { 
          setCorrectLetters(correctLetters => [...correctLetters, key]);
        }
        else{
          showNotification();
          duplicateWord.play();
        }
      }
      else if(!wrongLetters.includes(key))
      {
           setWrongLetters(wrongLetters => [...wrongLetters, key]);
      }
     }
    }
    }

    if(!playable)
    {
        const status = checkWin(correctLetters,wrongLetters,selectedWord)
        if(status === 'win')
        setScore(prev => prev + 1);
    }
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  },[correctLetters, wrongLetters, playable])

  
  const showNotification = () => {
    setNotificationStatus('show');//Making the notification visible
    setTimeout(() => {
     setNotificationStatus('hide');// Remove the notification after 1.5s seconds
    }, 1000); // 1500 milliseconds = 1.5 seconds
  };

  return (
   
    <div className="bg-[#dbd8e3] h-screen relative space-y-5 overflow-y-hidden md:space-y-7 lg:space-y-10">
      <Header/>
      <ScoreBoard score ={score} setScore={setScore}/>
      <div className="flex justify-around pr-3 py-2">
        <FigureParts/>
        <WrongLetters wrongLetters={wrongLetters}/>
      </div>
      <DisplayWord selectedWord={selectedWord} correctLetters={correctLetters}/>
      <div className={`absolute top-0 w-full`}><FinalMessage/></div>
      <div className={`transform ${notificationStatus === 'hide' ? 'translate-y-[100vh]' : 'translate-y-0'}`}>
  <ShowNotification />
</div>

    </div>
  )
}
export default App;
