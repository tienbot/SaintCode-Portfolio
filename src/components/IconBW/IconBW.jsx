import React from 'react'
import clsx from "clsx";
import s from './IconBW.module.css'
import angularIcon from './assets/Angular.svg'
import cssIcon from './assets/CSS.svg'
import flutterIcon from './assets/Flutter.svg'
import htmlIcon from './assets/HTML.svg'
import reactIcon from './assets/React.svg'
import gatsbyIcon from './assets/Gatsby.svg'
import vueIcon from './assets/Vue.svg'
import jsIcon from './assets/JS.svg'

const icons = {
    angular: angularIcon,
    css: cssIcon,
    flutter: flutterIcon,
    html: htmlIcon,
    react: reactIcon,
    gatsby: gatsbyIcon,
    vue: vueIcon,
    js: jsIcon
  };
  
  export const IconBW = ({ alt, ...props }) => {
    const {
        className,
        active,
      } = props;

    const innerIcon = icons[Object.keys(props).find(key => icons[key])]; //перебор всего контента icons
    //s.icon - дефолтный класс иконки
    const innerClassName = clsx(s.icon, className, {
        [s.active]: active, //доп. класс иконки
    });
  
    return (
      <img className={innerClassName} src={innerIcon} alt={alt}/>
    );
  };
