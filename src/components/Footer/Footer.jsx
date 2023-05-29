import React, { useEffect, useState } from 'react';
import style from "./Footer.module.css";
import git from "./git_logo.svg";
import instagram from "./instagram_logo.svg";
import facebook from "./facebook_logo.svg";
import Media from "../../ui/Media/Media.jsx";

const Footer = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Функция для обновления ширины окна при изменении размера экрана
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Добавляем слушатель события изменения размера окна
    window.addEventListener('resize', handleResize);

    // Очищаем слушатель события при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showUserName = windowWidth > 540;
    

  return (
    <footer className={style.footer}>
      <div className={style.find}>find me in:</div>
      <div className={style.instagram}>
        <Media icon={instagram} href="https://instagram.com" />
      </div>
      <div className={style.facebook}>
        <Media icon={facebook} href="https://facebook.com" />
      </div>
      <div className={style.username}>
        {showUserName ? 
            (<Media icon={git} userName="@username" href="https://github.com" />) :
            (<Media icon={git} href="https://github.com" />)
        }
      </div>
    </footer>
  );
};

export default Footer;
