import { useEffect, useContext, useState} from 'react'
import Header from './components/Header'
import InputBox from './components/InputBox'
import FigureParts from './components/FigureParts'
import WrongLetters from './components/WrongLetters'
import DisplayWord from './components/DisplayWord'
import FinalMessage from './components/FinalMessage'
import ShowNotification from './components/ShowNotification';
import {MyContext} from './GlobalState'




function App() {

  const {
    setPlayable,
    playable,
    correctLetters,
    wrongLetters,
    selectedWord,
    setCorrectLetters,
    setWrongLetters
  } = useContext(MyContext);

  const [notificationStatus, setNotificationStatus] = useState(96)
 
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
          console.log(correctLetters);
        }
        else{
          showNotification();
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

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  },[correctLetters, wrongLetters, playable])

  const showNotification = () => {
    setNotificationStatus(-96);//Making the notification visible
    setTimeout(() => {
     setNotificationStatus(96);// Remove the notification after 1.5s seconds
    }, 1500); // 1500 milliseconds = 1.5 seconds
    
    
  };

  return (
   
    <div className="bg-[#497285] h-screen relative overflow-y-hidden">
      <Header/>
      <InputBox/>
      <div className="flex justify-around pr-3 py-5">
        <FigureParts/>
        <WrongLetters wrongLetters={wrongLetters}/>
      </div>
      <DisplayWord selectedWord={selectedWord} correctLetters={correctLetters}/>
      <div className={`absolute top-0 w-full`}><FinalMessage correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable}/></div>
     <div className={`translate-y-${notificationStatus}`}><ShowNotification/></div> 

    </div>
  )
}



export default App;
