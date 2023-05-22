import React from 'react'
import img from './assets/img.jpeg'
import s from './Card.module.css'
import { Button } from '../Button/Button'
import { IconColor } from '../IconColor/IconColor'
import { IconBW} from '../IconBW/IconBW'

export const Card = ({ name, imageUrl, link}) => {
 const getIconsByProjectName = (projectName) => {
    const iconsByProject = {
      'denis-novik': ['html', 'css'],
      'dodo-pizza': ['html', 'css'],
      'emoji': ['js', 'css'],
      'emoji-react-app': ['react'],
      'harry-potter-js': ['js'],
      'maket': ['html', 'css'],
      'order-card': ['html', 'css'],
      'react-first': ['react'],
      'restauraunt': ['css', 'html'],
      'todo-list-js': ['js'],
      'vizit-cart': ['html', 'css'],
      'weather-js': ['js']
    };

    return iconsByProject[projectName.toLowerCase()] || [];
  };

  const projectIcons = getIconsByProjectName(name);
  return (
    <div className={s.card}>
     <h2 className={s.h2}>Projects <span className={s.span}>// _{name}</span></h2>
      <div className={s.card__top}>
        <img className={s.card__img} src={imageUrl} alt="изображение проекта" />
       <div className={s.iconsContainer}>
  {projectIcons.map((icon) => (
    <IconColor key={icon} language={icon} alt='icon' />
  ))}
</div>
      </div>
      <div className={s.card__bottom}>
        <p>{name}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button children='view-project' />
        </a>
      </div>
</div>
  );
};
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
