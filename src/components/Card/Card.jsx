import React from 'react'
import img from './assets/img.jpeg'
import s from './Card.module.css'
import { Button } from '../Button/Button'
import { IconColor } from '../IconColor/IconColor'
import { IconBW} from '../IconBW/IconBW'


// export const Card = () => {
//   return (
//     <div className={s.card}>
//         <div className={s.card__top}>
//             <img className={s.card__img} src={img} alt="изображение проекта" />
//             <IconColor vue alt='icon'/>
//         </div>
//         <div className={s.card__bottom}>
//             <p>Duis aute irure dolor in velit esse cillum dolore.</p>
//             <Button children='view-project' ghost/>
//             <IconBW css active alt='icon'/>
//             <IconBW vue active alt='icon'/>
//         </div>
//     </div>
//   )
// }
export const Card = ({ name, imageUrl, link }) => {
  return (
    <div className={s.card}>
<<<<<<< HEAD
        <div className={s.card__top}>
            <img className={s.card__img} src={img} alt="изображение проекта" />
            <IconColor js alt='icon'/>
        </div>
        <div className={s.card__bottom}>
            <p>Duis aute irure dolor in velit esse cillum dolore.</p>
            <Button children='view-project' ghost/>
            <IconBW css active alt='icon'/>
            <IconBW vue active alt='icon'/>
        </div>
=======
      <h2 className={s.h2}>Projects <span className={s.span}>// _{name}</span></h2>
      <div className={s.card__top}>
        <img className={s.card__img} src={imageUrl} alt="изображение проекта" />
        <IconColor vue alt='icon' />
      </div>
      <div className={s.card__bottom}>
        <p>{name}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button children='view-project' />
        </a>
      </div>
>>>>>>> 96a2da69a2e2fb5768c6aefc1e3f8eae6b007d8b
    </div>
  );
};

