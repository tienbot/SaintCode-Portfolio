import React, { useState } from 'react'
import s from './Check.module.sass'
import { IconBW } from '../IconBW/IconBW'

const icons = [
  { key: 'react', alt: 'React', active: true, text: 'React' },
  { key: 'html', alt: 'HTML', active: false, text: 'HTML' },
  { key: 'css', alt: 'CSS', active: false, text: 'CSS' },
  { key: 'js', alt: 'Javascript', active: false, text: 'Javascript'},
  { key: 'vue', alt: 'Vue', active: false, text: 'Vue' },
  { key: 'angular', alt: 'Angular', active: false, text: 'Angular' },
  { key: 'gatsby', alt: 'Gatsby', active: false, text: 'Gatsby' },
  { key: 'flutter', alt: 'Flutter', active: false, text: 'Flutter' },
];

export const Check = () => {
  const [checkedIcons, setCheckedIcons] = useState(icons)

  const handleCheckboxChange = (key) => {
    setCheckedIcons((prevIcons) =>
      prevIcons.map((icon) =>
        icon.key === key ? { ...icon, active: !icon.active } : icon
      )
    )
  }

  return (
    <div className={s.list}>
    <ul >
      {checkedIcons.map(({ key, alt, active, text }) => (
        <li key={key}className={s.checkItem}>
          <label className={s.checkbox}>
            <input
              className={s.check}
              type="checkbox"
              checked={active}
              onChange={() => handleCheckboxChange(key)}
            />
            <span className={s.checkmark}></span>
          <IconBW {...{ [key]: true, active }} alt={alt} /> 
              </label>
               <span className={`${s.text} ${active ? s.activeText : ''}`}>{text}</span>
        </li>
      ))}
      </ul>
      </div>
  )
}
