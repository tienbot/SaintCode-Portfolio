import React from 'react'

import s from './LinkComponent.module.scss'

const LinkComponent = ({ href, text, image }) => {
  return (
    <a className={s.link} href={href} target='_blank' rel="noreferrer">
      {image && <img src={image} alt={text}/>}
      {text}
    </a>
  );
};

export default LinkComponent;