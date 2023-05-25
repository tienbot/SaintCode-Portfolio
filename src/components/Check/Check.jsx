import React, { useState } from 'react';
import s from './Check.module.sass';
import { IconBW } from '../IconBW/IconBW';

const icons = [
  { key: 'react', alt: 'React', active: false, text: 'React', projects: ['emoji-react-app', 'react-first', '3dCard'] },
  { key: 'html', alt: 'HTML', active: false, text: 'HTML', projects: ['Dodo-Pizza', 'maket', 'order-card', 'restauraunt', 'vizit-cart'] },
  { key: 'css', alt: 'CSS', active: false, text: 'CSS', projects: ['Dodo-Pizza', 'maket', 'order-card', 'restauraunt', 'vizit-cart', 'Emoji'] },
  { key: 'js', alt: 'Javascript', active: false, text: 'Javascript', projects: ['Emoji', 'harry-potter-js', 'todo-list-js', 'weather-js'] },
  { key: 'vue', alt: 'Vue', active: false, text: 'Vue' },
  { key: 'angular', alt: 'Angular', active: false, text: 'Angular' },
  { key: 'gatsby', alt: 'Gatsby', active: false, text: 'Gatsby' },
  { key: 'flutter', alt: 'Flutter', active: false, text: 'Flutter' },
];

export const Check = ({ setCheckedProjects, setButtonXText, setButtonXVisible }) => {
  const [checkedIcons, setCheckedIcons] = useState(icons);
const handleCheckboxChange = (key, text) => {
  setCheckedIcons((prevIcons) =>
    prevIcons.map((icon) =>
      icon.key === key ? { ...icon, active: !icon.active } : icon
    )
  );

  const updatedCheckedIcons = checkedIcons.map((icon) =>
    icon.key === key ? { ...icon, active: !icon.active } : icon
  );

  const checkedProjects = updatedCheckedIcons
    .filter((icon) => icon.active)
    .flatMap((icon) => icon.projects || []);

  setCheckedProjects(checkedProjects);

  const selectedTexts = updatedCheckedIcons
    .filter((icon) => icon.active)
    .map((icon) => icon.text)
    .join('; ');

    setButtonXText(selectedTexts);

    const hasSelectedCheckboxes = updatedCheckedIcons.some((icon) => icon.active);
    setButtonXVisible(hasSelectedCheckboxes);
};
return (
    <div className={s.list}>
      <ul>
        {checkedIcons.map(({ key, alt, active, text }) => (
          <li key={key} className={s.checkItem}>
            <label className={s.checkbox}>
              <input
                className={s.check}
                type="checkbox"
                checked={active}
                onChange={() => handleCheckboxChange(key, text)}
              />
              <span className={s.checkmark}></span>
              <IconBW {...{ [key]: true, active }} alt={alt} />
            </label>
            <span className={`${s.text} ${active ? s.activeText : ''}`}>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

//  const handleCheckboxChange = (key) => {
//     setCheckedIcons((prevIcons) =>
//       prevIcons.map((icon) =>
//         icon.key === key ? { ...icon, active: !icon.active } : icon
//       )
//     );

//     const projectsToUpdate = icons.find((icon) => icon.key === key)?.projects || [];

//     setCheckedProjects((prevCheckedProjects) => {
//       if (prevCheckedProjects.some((project) => projectsToUpdate.includes(project))) {
//         return prevCheckedProjects.filter((project) => !projectsToUpdate.includes(project));
//       } else {
//         return [...prevCheckedProjects, ...projectsToUpdate];
//       }
//     });
//   };