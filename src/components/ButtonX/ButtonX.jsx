import React from 'react';
import xbutton from './ButtonXImg/close.svg';
import s from './ButtonX.module.sass';

export const ButtonX = ({ children, onClick }) => {
  const handleButtonClick = () => {
    if (onClick) {
      onClick(); // Call the onClick handler passed from the parent component
    }
  };

  return (
    <div className={s.divButton}>
     <p className={s.text}>{children}</p>
      <button className={s.button} onClick={handleButtonClick}>
          <img className={s.img} src={xbutton} alt="delete all" />
        </button>
      
    </div>
  );
};
