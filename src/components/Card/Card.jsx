import React from 'react'
import img from './assets/img.jpeg'
import s from './Card.module.css'
import { Button } from '../Button/Button'

export const Card = () => {
  return (
    <div className={s.card}>
        <div className={s.card__top}>
            <img className={s.card__img} src={img} alt="" />
        </div>
        <div className={s.card__bottom}>
            <p>Duis aute irure dolor in velit esse cillum dolore.</p>
            <Button/>
        </div>
    </div>
  )
}
