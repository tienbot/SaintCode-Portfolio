import React, { useEffect, useState } from 'react';
import Toggle from '../Toggle/Toogle';
import { Check } from '../Check/Check';
import s from './Projects.module.sass';
import { Card } from '../Card/Card';
import { ButtonX } from '../ButtonX/ButtonX';

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [checkedProjects, setCheckedProjects] = useState([]);
  const [buttonXVisible, setButtonXVisible] = useState(false);
  const [buttonXText, setButtonXText] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/users/iliajuso/repos')

      .then((response) => response.json())
      .then((data) => {
       setProjects(data);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
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
    checkedProjects.includes(project.name.toLowerCase())
  )

  return (
    <main className={s.main}>
      <div className={s.wrapper}>
        <Toggle dropdownContent={<Check setCheckedProjects={handleCheckedProjectsChange} setButtonXText={setButtonXText} setButtonXVisible={setButtonXVisible} />}>
          <label className={s.labelText}>projects</label>
        </Toggle>
      </div>
<div className={s.border}>
        {buttonXVisible && <ButtonX onClick={handleButtonXClick}>{buttonXText}</ButtonX>}
      </div>
      {/* <hr/> */}
      <div className={s.card_div}>
        {filteredProjects.map((project, index) => (
          <Card
            key={project.id}
            name={project.name}
            imageUrl={project.owner.avatar_url}
            link={project.html_url}
            isVisible={checkedProjects.includes(project.name.toLowerCase())}
            index={index + 1} // Add the project index prop
          />
        ))}

      </div>
    </main>
  );
};


