import React, { useState } from 'react'
import GlobalContext from './globalContext'

export default function GlobalState (props) {
  const [list, setList] = useState([1, 2, 3, 4, 5])
  const [text, setText] = useState('hello world')
  const changeList = list => {
    setList(list)
  }
  const changeText = text => {
    setText(text)
  }
  return (
    <GlobalContext.Provider 
      value={{
        list,
        text,
        changeList,
        changeText,
      }}>
      {props.children}
    </GlobalContext.Provider>
  )
}