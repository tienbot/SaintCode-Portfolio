import React, { useEffect, useState } from 'react';
import Toggle from '../../components/Toggle/Toogle';
import { Check } from '../../components/Check/Check';
import s from './Projects.module.sass';
import { Card } from '../../components/Card/Card';
import { ButtonX } from '../../components/ButtonX/ButtonX';

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [checkedProjects, setCheckedProjects] = useState([]);
  const [buttonXVisible, setButtonXVisible] = useState(false);
  const [buttonXText, setButtonXText] = useState('');

    const login = 'iliajuso'
  // const login = 'tienbot'
  useEffect(() => {
    // Выполните запрос к GitHub API, чтобы получить список проектов пользователя
    fetch('https://api.github.com/users/'+login+'/repos')
      .then(response => response.json())
      .then(data => {
        // Сохраните полученные проекты в состояние
        setProjects(data);
        console.log(data);
        const initialCheckedProjects = data.map(project => project.name);
        setCheckedProjects(initialCheckedProjects);
      })
      .catch(error => {
        console.error('Ошибка при получении проектов:', error);
      });
  }, []);

  const handleCheckedProjectsChange = (newCheckedProjects) => {
    setCheckedProjects(newCheckedProjects);
    setButtonXVisible(true); // Show ButtonX when projects are selected
  };

  const handleButtonXClick = () => {
    setCheckedProjects([]); // Clear selected projects
    setButtonXVisible(false); // Hide ButtonX
  };

  const filteredProjects = projects.filter((project) =>
    checkedProjects.includes(project.name)
  )
  return (
    <main className={s.main}>
      <div className={s.wrapper}>
        <p className={s.mobileTitle}>_projects</p>
        <Toggle dropdownContent={<Check setCheckedProjects={handleCheckedProjectsChange} setButtonXText={setButtonXText} setButtonXVisible={setButtonXVisible} />}>
          <label className={s.labelText}>projects</label>
        </Toggle>
      </div>
      <div className={s.wrapperCards}>
       <div className={s.border}>
            {buttonXVisible && <ButtonX onClick={handleButtonXClick}>{buttonXText}</ButtonX>}
        </div>
        <div className={s.card_div}>
            {filteredProjects.map((project, index) => (
            <Card 
                    key = { project.id }
                    name={project.name}
                    imageUrl={project.owner.avatar_url}
                    // imageUrl={project.html_url+'/blob/main/preview/preview.jpg?raw=true'}
                    link={project.html_url}
                    hasPage = {project.has_pages}
                    linkPage={'https://'+login+'.github.io/'+project.name}
                    isVisible={checkedProjects.includes(project.name)}
                    index={index + 1} // Add the project index prop
                />
            ))}
        </div>
    </div>
    </main>
  );
};