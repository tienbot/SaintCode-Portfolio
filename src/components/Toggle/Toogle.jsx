import React, { useState } from 'react';
import s from "./Toogle.module.sass"

export const Toggle = ({ arrowStyle, dropdownContent, children }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
        <span className={`${s.checkmark} ${arrowStyle}`}></span>
        {children}
      </label>

      <div className={`${s.dropdown} ${isDropdownVisible ? s.show : ''}`}>
      {dropdownContent}
    </div>
    </div>
  );
};

export default Toggle;
