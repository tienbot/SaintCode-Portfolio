import React, {useEffect, useState} from 'react'
import Toggle from '../Toggle/Toogle'
import { Check } from '../Check/Check'
import s from "./Projects.module.sass"
import { Card } from '../Card/Card'
export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [checkedProjects, setCheckedProjects] = useState([]);
  
  useEffect(() => {
    // Выполните запрос к GitHub API, чтобы получить список проектов пользователя
    fetch('https://api.github.com/users/iliajuso/repos')
      .then(response => response.json())
      .then(data => {
        // Сохраните полученные проекты в состояние
        setProjects(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Ошибка при получении проектов:', error);
      });
  }, []);
const filteredProjects = projects.filter((project) =>
  checkedProjects.includes(project.name.toLowerCase())
);
  return (
    <main className={s.main}>
      <div className={s.wrapper}>
      <Toggle dropdownContent={<Check setCheckedProjects={setCheckedProjects} />}>
  <label className={s.labelText}>projects</label>
</Toggle>
      </div>
      <div className={s.card_div}>
        {projects.map(project => (
        <Card
        key={project.id}
        name={project.name}
        imageUrl={project.owner.avatar_url}
        link={project.html_url}
        isVisible={checkedProjects.includes(project.name.toLowerCase())}
      />
        ))} 
      </div>
    </main>
  );
};




