import React from 'react'
import xbutton from "./ButtonXImg/Vector(5).png"
import s from "./ButtonX.module.sass"
export const ButtonX = ({children}) => {
  return (
      <div className={s.divButton}>
          <button className={s.button}>
              <p className={s.text}>{children}</p>
              <img className={s.img} src={xbutton} alt="delete all"/>
          </button>
    </div>
  )
}
