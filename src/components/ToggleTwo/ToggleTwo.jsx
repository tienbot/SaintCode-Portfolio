import React, { useState } from 'react';
import s from "./ToggleTwo.module.sass"

export const ToggleTwo = ({ dropdownContent, children }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleToggleClick = () => {
    setIsChecked(!isChecked);
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className={s.containerStyle}>
      <div className={s.checkbox} onClick={handleToggleClick}>
        <input
          className={s.check}
          type='checkbox'
          checked={isChecked}
          onChange={() => {}}
        />
        <span className={s.checkmark}></span>
        {children}
      </div>

      {isDropdownVisible && (
        <div className={`${s.dropdown} ${s.show}`}>
          {dropdownContent}
        </div>
      )}
    </div>
  );
};

export default ToggleTwo;


