import React from 'react'
import clsx from "clsx";
import s from './Button.module.css'

export const Button = (props) => {
    const {
        className,
        textBtn,
        primary,
        ghost,
        startGame,
        playAgain
      } = props;
    
    //s.button - дефолтный класс кнопки
    const innerClassName = clsx(s.button, className, { 
        //дополнительные классы кнопки
        [s.button__primary]: primary,
        [s.button__ghost]: ghost,
        [s.button__startGame]: startGame,
        [s.button__playAgain]: playAgain,
    });

  return (
        <button className={innerClassName}>{textBtn}</button>
  )
}
