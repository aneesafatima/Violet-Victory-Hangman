
import { useEffect, useContext, useState} from 'react'
import Header from './components/Header'
import ScoreBoard from './components/ScoreBoard'
import FigureParts from './components/FigureParts'
import WrongLetters from './components/WrongLetters'
import DisplayWord from './components/DisplayWord'
import FinalMessage from './components/FinalMessage'
import ShowNotification from './components/ShowNotification';
import {MyContext} from './GlobalState'



function App() {

  const{
    setPlayable,
    playable,
    correctLetters,
    wrongLetters,
    setCorrectLetters,
    setWrongLetters,
    selectedWord,
    setSelectedWord
  } = useContext(MyContext);

  const [notificationStatus, setNotificationStatus] = useState(96);
 
  useEffect(()=>
  {
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
        }
        else{
          showNotification();
        }
      }
      else if(!wrongLetters.includes(key))
      {
           setWrongLetters(wrongLetters => [...wrongLetters, key]);
      }
     }
    }
    }

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  },[correctLetters, wrongLetters, playable])

  
  const showNotification = () => {
    setNotificationStatus(-28);//Making the notification visible
    setTimeout(() => {
     setNotificationStatus(96);// Remove the notification after 1.5s seconds
    }, 1500); // 1500 milliseconds = 1.5 seconds
  };

  return (
   
    <div className="bg-[#dbd8e3] h-screen relative overflow-y-hidden">
      <Header/>
      <ScoreBoard/>
      <div className="flex justify-around pr-3 py-5">
        <FigureParts/>
        <WrongLetters wrongLetters={wrongLetters}/>
      </div>
      <DisplayWord selectedWord={selectedWord} correctLetters={correctLetters}/>
      <div className={`absolute top-0 w-full`}><FinalMessage/></div>
     <div className={`translate-y-${notificationStatus}`}> <ShowNotification/> </div> 
    </div>
  )
}
export default App;
