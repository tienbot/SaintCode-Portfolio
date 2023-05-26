import React, { useState } from 'react';
import s from "./Toogle.module.sass"

export const Toggle = ({ arrowStyle, containerStyle, dropdownContent, children }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleArrowClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className={s.containerStyle}>
      
      <label className={`${s.checkbox}`}>
        <input
          className={s.check}
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className={`${s.checkmark} ${arrowStyle}`} onClick={handleArrowClick}></span>
      {children}
      </label>
{/* 
      {isDropdownVisible && (
        <div className={s.dropdown}>
          {dropdownContent}
        </div>
      )} */}
      <div className={`${s.dropdown} ${isDropdownVisible ? s.show : ''}`}>
      {dropdownContent}
    </div>
    </div>
  );
};

export default Toggle;


