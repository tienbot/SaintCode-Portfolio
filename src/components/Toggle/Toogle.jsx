import React, { useState } from 'react';
import s from "./Toogle.module.sass";

export const Toggle = () => {
    const [isChecked, setIsChecked] = useState(false)
     const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
     <label className={s.checkbox}>
              <input className={s.check} type='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
              <span className={s.checkmark}></span>    
          </label>
  )
}

export default Toggle;

