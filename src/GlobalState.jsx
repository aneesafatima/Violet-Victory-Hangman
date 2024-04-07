import React from 'react';
import  {useState, createContext } from 'react';
import { generate } from "random-words";

const MyContext = createContext();

function GlobalState({children}) {
const [correctLetters, setCorrectLetters]= useState([]);
const [wrongLetters, setWrongLetters]= useState([]);
const [playable, setPlayable] = useState(true);
const [selectedWord, setSelectedWord] = useState(generate(1)[0]);


    return(
        <MyContext.Provider value={{ correctLetters, wrongLetters, playable, setCorrectLetters, setWrongLetters, setPlayable, setSelectedWord, selectedWord}}>
            {children}
        </MyContext.Provider>
    )
}
export {GlobalState, MyContext} ;
