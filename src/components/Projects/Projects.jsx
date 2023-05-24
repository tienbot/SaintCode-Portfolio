import React, {useEffect, useState} from 'react'
import Toggle from '../Toggle/Toogle'
import { Check } from '../Check/Check'
import s from "./Projects.module.sass"
import { Card } from '../Card/Card'
import { ButtonX } from '../ButtonX/ButtonX'
export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [checkedProjects, setCheckedProjects] = useState([]);
  // const [projectCounter, setProjectCounter] = useState(1);
  useEffect(() => {
    // Выполните запрос к GitHub API, чтобы получить список проектов пользователя
    fetch('https://api.github.com/users/iliajuso/repos')
    // fetch('https://api.github.com/users/tienbot/repos')
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
  checkedProjects.includes(project.name)
  );
  
  return (
    <main className={s.main}>
     <div className={s.wrapper}>
      <Toggle dropdownContent={<Check setCheckedProjects={setCheckedProjects} />}>
  <label className={s.labelText}>projects</label>
</Toggle>
      </div>
      <div className={s.content}>
        <div className={s.border}>
            <ButtonX />
        </div>
        {/* <hr/> */}
        <div className={s.card_div}>
            {filteredProjects.map((project, index) => (
            <Card
                key={project.id}
                name={project.name}
                imageUrl={project.owner.avatar_url}
                // imageUrl={project.html_url+'/blob/main/preview/preview.jpg?raw=true'}
                link={project.html_url}
                isVisible={checkedProjects.includes(project.name)}
                index={index + 1} // Add the project index prop
            />
            ))}
        </div>
      </div>
    </main>
  );
};




