import React, {useEffect, useState} from 'react'
// import img from './assets/img.jpeg'
import s from './Card.module.css'
import { Button } from '../Button/Button'
import { IconColor } from '../IconColor/IconColor'

export const Card = ({ name, imageUrl, link, hasPage, linkPage, isVisible, index }) => {
  const [showCard, setShowCard] = useState(false);
 const getIconsByProjectName = (projectName) => {
    
    //проекты Ильи
    // const iconsByProject = {
    //   'denis-novik': ['html', 'css'],
    //   'dodo-pizza': ['html', 'css'],
    //   'Emoji': ['js', 'css'],
    //   'emoji-react-app': ['react'],
    //   'harry-potter-js': ['js'],
    //   'maket': ['html', 'css'],
    //   'order-card': ['html', 'css'],
    //   'react-first': ['react'],
    //   'restauraunt': ['css', 'html'],
    //   'todo-list-js': ['js'],
    //   'vizit-cart': ['html', 'css'],
    //   'weather-js': ['js']
    // };

    //проекты Саши
    const iconsByProject = {
        '3dCard': ['css', 'js'],
        'darkSlider': ['html', 'css'],
        'gallery': ['css', 'js'],
        'beautifulWorld': ['css', 'js'],
        'food': ['html', 'css', 'js'],
        'architect': ['css'],
        'fairyForest': ['css', 'js'],
      };

    return iconsByProject[projectName] || [];
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
            <h2 className={s.h2}>Projects {index} <span className={s.span}>&#47;&#47; _{name}</span></h2>
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
                <div className={s.buttons}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <Button textBtn='view-project' />
                    </a>
                    {hasPage && <a href={linkPage} target="_blank" rel="noopener noreferrer">
                        <Button textBtn='view-site' ghost />
                    </a>}
                </div>
            </div>
        </div>
    </div>
    // <div className={s.card}>
  );
};