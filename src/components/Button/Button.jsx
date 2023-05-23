import React from 'react'
import clsx from "clsx";
import s from './Button.module.css'

export const Button = (props) => {
    const {
        className,
        children,
        primary,
        ghost,
        startGame,
      } = props;
    
    //s.button - дефолтный класс кнопки
    const innerClassName = clsx(s.button, className, { 
        //дополнительные классы кнопки
        [s.button__primary]: primary,
        [s.button__ghost]: ghost,
        [s.button__startGame]: startGame,
    });

  return (
        <button className={innerClassName}>{children}</button>
  )
}
