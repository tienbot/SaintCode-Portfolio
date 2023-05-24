import React, {useEffect, useState} from 'react'
import img from './assets/img.jpeg'
import s from './Card.module.css'
import { Button } from '../Button/Button'
import { IconColor } from '../IconColor/IconColor'
import { IconBW} from '../IconBW/IconBW'

export const Card = ({ name, imageUrl, link, isVisible, index }) => {
  const [showCard, setShowCard] = useState(false);
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
   useEffect(() => {
    if (isVisible) {
      setShowCard(true);
    }
  }, [isVisible]);

  if (!isVisible) {
    console.log(isVisible);
    return null; // Hide the card if it is not visible
  }
  return (
    <div className="">
        <div className="">
            <h2 className={s.h2}>Projects {index} <span className={s.span}>// _{name}</span></h2>
        </div>
        <div className={`${s.card} ${showCard ? s.show : ''}`}>
     
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
                    <Button textBtn='view-project' />
                </a>
            </div>
        </div>
    </div>
    // <div className={s.card}>
<<<<<<< HEAD
     <div className={`${s.card} ${showCard ? s.show : ''}`}>
     <h2 className={s.h2}>Projects {index} <span className={s.span}>// _{name}</span></h2>
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
          <Button textBtn='view-project' />
        </a>
      </div>
</div>
=======
>>>>>>> main
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
//             <Button textBtn='view-project' ghost/>
//             <IconBW css active alt='icon'/>
//             <IconBW vue active alt='icon'/>
//         </div>
//     </div>
//   )
// }
