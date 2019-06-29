import React from 'react'
import Key from '../Key'
import './Keypad.css'


const Keypad = ({ keys }) => {
  return (
    <section className="keypad keypad__numbers">
      {keys.map((key, index) => (
        <Key
          key={index}
          text={key.text}
          gridArea={key.gridArea}
          vAlign={key.verticalAlign}
          hAlign={key.horizontalAlign}
          smallText={key.hasSmallText}
        />
      ) )}
    </section>
  )
}

export default Keypad
