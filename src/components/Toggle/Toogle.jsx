// import React, { useState } from 'react';
// import s from "./Toggle.module.sass";
// import s2 from "./ToggleTwo.module.sass";

// export const CustomToggle = ({ arrowStyle, containerStyle }) => {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };

//   return (
//     <label className={`${s.checkbox} ${containerStyle}`}>
//       <input
//         className={s.check}
//         type='checkbox'
//         checked={isChecked}
//         onChange={handleCheckboxChange}
//       />
//       <span className={`${s.checkmark} ${arrowStyle}`}></span>
//     </label>
//   );
// };

// export default CustomToggle;
import React, { useState } from 'react';
import s from "./Toogle.module.sass"
import s2 from "./ToggleTwo.module.sass";

export const CustomToggle = ({ arrowStyle, containerStyle, dropdownContent }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleArrowClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className={containerStyle}>
      <label className={`${s.checkbox}`}>
        <input
          className={s.check}
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className={`${s.checkmark} ${arrowStyle}`} onClick={handleArrowClick}></span>
      </label>

      {isDropdownVisible && (
        <div className={s.dropdown}>
          {dropdownContent}
        </div>
      )}
    </div>
  );
};

export default CustomToggle;


