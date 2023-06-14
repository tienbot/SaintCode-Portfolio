import { useState, useMemo } from 'react';
import style from './About.module.css';
import CodeSnippedBlock from '../../components/CodeSnipedBlock/CodeSnippedBlock';
import Toggle from '../../components/Toggle/Toogle';
import ToggleTwo from '../../components/ToggleTwo/ToggleTwo';
import bio from '../../components/ToggleTwo/ToogleTwoImg/bio.svg';
import int from '../../components/ToggleTwo/ToogleTwoImg/int.svg';
import edu from '../../components/ToggleTwo/ToogleTwoImg/edu.svg';
import profesional from "../About/AboutImg/profesional.svg";
import personal from "../About/AboutImg/personal.svg"
import hobby from '../About/AboutImg/hobby.svg';
import { DropdownContacts } from '../../components/DropdownContacts/DropdownContacts';
import DropDownEducation from '../../components/DropDownEducation/DropDownEducation';
import AboutInfoContent from '../../components/AboutLeftInfo/AboutInfoContent';
import { ButtonX } from "../../components/ButtonX/ButtonX.jsx"

const About = ({ codeSnippetArr, children }) => {
  const [activeToggle, setActiveToggle] = useState('');
  const [showButtonX, setShowButtonX] = useState(false);
  const [activeToggleName, setActiveToggleName] = useState('');
  
  const handleToggleClick = (toggleName, toggleComponent) => {
    if (activeToggle === toggleName) {
      setActiveToggle('');
      setShowButtonX(false);
      setActiveToggleName('');
    } else {
      setActiveToggle(toggleName);
      setShowButtonX(true);
      setActiveToggleName(toggleComponent);
    }
  };

  const handleButtonXClick = () => {
    setActiveToggle('');
    setShowButtonX(false);
    setActiveToggleName('');
  };
   const memoizedCodeSnippedBlock = useMemo(
    () => <CodeSnippedBlock codeSnippetArr={codeSnippetArr} />,
    [codeSnippetArr]
);
  return (
    <div className={style.main}>
      <div className={style.sidebar}>
        <img className={`${style.imgOne} ${activeToggle === 'profesional-info' ? style.active : ''}`} src={profesional} alt="Professional" />
        <img className={`${style.imgTwo} ${activeToggle === 'personal-info' ? style.active : ''}`} src={personal} alt="Personal" />
        <img className={`${style.imgThree} ${activeToggle === 'hobbies' ? style.active : ''}`} src={hobby} alt="Hobbies" />
      </div>
      <div className={style.menu__wrapper}>
        <div className={style.toggleTwo}>
          <Toggle
           dropdownContent={
              <>
                <ToggleTwo>
                  <label
                    className={`${style.labelText} ${
                      activeToggle === 'Experiance' ? style.active : ''
                    }`}
                    onClick={() => handleToggleClick('Experiance', 'profesional-info')}
                  >
                    <img className={style.imgBio} src={bio} alt="Experiance" />
                    experiance
                  </label>
                </ToggleTwo>
                <ToggleTwo>
                  <label
                    className={`${style.labelText} ${
                      activeToggle === 'Skills' ? style.active : ''
                    }`}
                    onClick={() => handleToggleClick('Skills', 'profesional-info')}
                  >
                    <img className={style.imgInfo} src={int} alt="Skills" />
                    skills
                  </label>
                </ToggleTwo>
                <ToggleTwo dropdownContent={<DropDownEducation />}>
                  <label
                    className={`${style.labelText} ${
                      activeToggle === 'Certificates' ? style.active : ''
                    }`}
                    onClick={() => handleToggleClick('Certificates', 'profesional-info')}
                  >
                    <img className={style.imgInfo} src={edu} alt="Certificates" />
                    certificates
                  </label>
                </ToggleTwo>
              </>
            }
          >
            <span className={style.spanText}>profesional-info</span>
          </Toggle>
          <Toggle
           dropdownContent={
              <>
                <ToggleTwo>
                  <label
                    className={`${style.labelText} ${
                      activeToggle === 'bio' ? style.active : ''
                    }`}
                    onClick={() => handleToggleClick('bio', 'personal-info')}
                  >
                    <img className={style.imgBio} src={bio} alt="Bio" />
                    bio
                  </label>
                </ToggleTwo>
                <ToggleTwo>
                  <label
                    className={`${style.labelText} ${
                      activeToggle === 'interests' ? style.active : ''
                    }`}
                    onClick={() => handleToggleClick('interests', 'personal-info')}
                  >
                    <img className={style.imgInfo} src={int} alt="Interests" />
                    interests
                  </label>
                </ToggleTwo>
                <ToggleTwo dropdownContent={<DropDownEducation />}>
                  <label
                    className={`${style.labelText} ${
                      activeToggle === 'education' ? style.active : ''
                    }`}
                    onClick={() => handleToggleClick('education', 'personal-info')}
                  >
                    <img className={style.imgInfo} src={edu} alt="Education" />
                    education
                  </label>
                </ToggleTwo>
              </>
            }
          >
            <span className={style.spanText}>personal-info</span>
          </Toggle>
          <Toggle
           dropdownContent={
              <>
                <ToggleTwo>
                  <label
                    className={`${style.labelText} ${
                      activeToggle === 'Music' ? style.active : ''
                    }`}
                    onClick={() => handleToggleClick('Music', 'hobbies')}
                  >
                    <img className={style.imgBio} src={bio} alt="Music" />
                    music
                  </label>
                </ToggleTwo>
                <ToggleTwo>
                  <label
                    className={`${style.labelText} ${
                      activeToggle === 'Hiking' ? style.active : ''
                    }`}
                    onClick={() => handleToggleClick('Hiking', 'hobbies')}
                  >
                    <img className={style.imgInfo} src={int} alt="Hiking" />
                    hiking
                  </label>
                </ToggleTwo>
                <ToggleTwo>
                  <label
                    className={`${style.labelText} ${
                      activeToggle === 'Books' ? style.active : ''
                    }`}
                    onClick={() => handleToggleClick('Books', 'hobbies')}
                  >
                    <img className={style.imgInfo} src={edu} alt="Books" />
                    books
                  </label>
                </ToggleTwo>
              </>
            }
          >
            <span className={style.spanText}>hobbies</span>
          </Toggle>
          <Toggle
         dropdownContent={<DropdownContacts />}
        >
          <span className={style.spanText}>contacts</span>
        </Toggle>
        </div>
      </div>
      <div className={style.left__content_wrapper}>
        <div className={style.content__title}>
            {showButtonX && <ButtonX onClick={handleButtonXClick}>{activeToggleName}</ButtonX>}
        </div>
        <AboutInfoContent activeToggle={activeToggle} />
      </div>
      <div className={style.right__content_wrapper}>
        <div className={style.content__title}></div>
        {memoizedCodeSnippedBlock}
      </div>
    </div>
  );
};

export default About;