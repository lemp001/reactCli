import { createContext } from 'react'


export default createContext({
  list: [1, 2, 3, 4, 5],
  text: 'hello world',
  changeList: () => {},
  changeText: () => {}
})