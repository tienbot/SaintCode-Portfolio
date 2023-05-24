// import React from 'react'
// import xbutton from "./ButtonXImg/Vector(5).png"
// import s from "./ButtonX.module.sass"
// export const ButtonX = ({children}) => {
//   return (
//       <div className={s.divButton}>
//           <button className={s.button}>
//               <p className={s.text}>{children}</p>
//               <img className={s.img} src={xbutton} alt="delete all"/>
//           </button>
//     </div>
//   )
// }
import React from 'react';
import xbutton from './ButtonXImg/Vector(5).png';
import s from './ButtonX.module.sass';

export const ButtonX = ({ children, onClick }) => {
  const handleButtonClick = () => {
    if (onClick) {
      onClick(); // Call the onClick handler passed from the parent component
    }
  };

  return (
    <div className={s.divButton}>
      <button className={s.button} onClick={handleButtonClick}>
        <p className={s.text}>{children}</p>
        <img className={s.img} src={xbutton} alt="delete all" />
      </button>
    </div>
  );
};
