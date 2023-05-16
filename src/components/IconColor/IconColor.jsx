import React from 'react'
import s from './IconColor.module.css'
import angularIcon from './assets/Angular.svg'
import cssIcon from './assets/CSS.svg'
import flutterIcon from './assets/Flutter.svg'
import htmlIcon from './assets/HTML.svg'
import reactIcon from './assets/React.svg'
import gatsbyIcon from './assets/Gatsby.svg'
import vueIcon from './assets/Vue.svg'

const icons = {
    angular: angularIcon,
    css: cssIcon,
    flutter: flutterIcon,
    html: htmlIcon,
    react: reactIcon,
    gatsby: gatsbyIcon,
    vue: vueIcon
  };
  
  export const IconColor = ({ alt, ...props }) => {
    const innerIcon = icons[Object.keys(props).find(key => icons[key])];
  
    return (
      <img className={s.icon} src={innerIcon} alt={alt}/>
    );
  };
