import React from 'react'
import Keypad from '../Keypad'
import './Keyboard.css'
import numberKeys from '../../keymaps'

console.log(numberKeys)

const Keyboard = () => {
  return(
    <section className="keyboard">
      <Keypad keys={numberKeys} />
    </section>
  )
}

export default Keyboard
