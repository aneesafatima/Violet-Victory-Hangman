import React from 'react';
import  {useState, createContext } from 'react';


const MyContext = createContext();
const choices = ['programming', 'interface', 'wizard', 'hello'];
const selectedWord = choices[Math.floor(Math.random()*choices.length)];

function GlobalState({children}) {

console.log(selectedWord);
const [correctLetters, setCorrectLetters]= useState([]);
const [wrongLetters, setWrongLetters]= useState([]);
const [playable, setPlayable] = useState(true);


    return(
        <MyContext.Provider value={{ choices, correctLetters, wrongLetters, playable, setCorrectLetters, setWrongLetters,setPlayable, selectedWord}}>
            {children}
        </MyContext.Provider>
    )
}

export {GlobalState, MyContext} ;
