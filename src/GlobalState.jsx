import React from 'react';
import  {useState, createContext } from 'react';


const MyContext = createContext();


function GlobalState({children}) {
const choices = ['programming', 'interface', 'wizard', 'hello'];
const selectedWord = choices[Math.floor(Math.random()*choices.length)];
console.log(selectedWord);

const [correctLetters, setcorrectLetters]= useState([]);
const [wrongLetters, setwrongLetters]= useState([]);
const [playable, setPlayable] = useState(true);


    return(
        <MyContext.Provider value={{ choices, correctLetters, wrongLetters, playable, setcorrectLetters, setwrongLetters,setPlayable, selectedWord}}>
            {children}
        </MyContext.Provider>
    )
}

export {GlobalState, MyContext} ;
