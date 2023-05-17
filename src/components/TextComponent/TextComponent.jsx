import React from 'react'
import s from './TextComponent.module.scss'

const TextComponent = ({ text }) => {
  return <p className={s.text}>{text}</p>;
};

export default TextComponent;