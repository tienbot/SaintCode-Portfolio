// import { useState } from 'react';
// import style from './About.module.css';
// import CodeSnippedBlock from '../../components/CodeSnipedBlock/CodeSnippedBlock';
// import Toggle from '../../components/Toggle/Toogle';
// import ToggleTwo from '../../components/ToggleTwo/ToggleTwo';
// import bio from '../../components/ToggleTwo/ToogleTwoImg/bio.svg';
// import int from '../../components/ToggleTwo/ToogleTwoImg/int.svg';
// import edu from '../../components/ToggleTwo/ToogleTwoImg/edu.svg';
// import profesional from "..//About/AboutImg/profesional.svg";
// import personal from "..//About/AboutImg/personal.svg"
// import hobby from '..//About/AboutImg/hobby.svg'
// import { DropdownContacts } from '../../components/DropdownContacts/DropdownContacts';
// import DropDownEducation from '../../components/DropDownEducation/DropDownEducation';

// const About = ({ codeSnippetArr, children }) => {
//   const [activeToggle, setActiveToggle] = useState('');

//   const handleToggleTwoClick = (toggleName) => {
//     if (activeToggle === toggleName) {
//       setActiveToggle('');
//     } else {
//       setActiveToggle(toggleName);
//     }
//   };

//   console.log(codeSnippetArr);

//   return (
//     <div className={style.main}>
//       <div className={style.sidebar}>
//         <img className={style.imgOne} src={profesional} />
//         <img className={style.imgTwo} src={personal} />
//          <img className={style.imgThree} src={hobby} />
//       </div>
//       <div className={style.menu__wrapper}>
//         <div className={style.toggleTwo}>
//            <Toggle
//             dropdownContent={
//               <>
//                 <ToggleTwo>
//                   <label
//                     className={`${style.labelText} ${
//                       activeToggle === 'Experiance' ? style.active : ''
//                     }`}
//                     onClick={() => handleToggleTwoClick('Experiance')}
//                   >
//                     <img className={style.imgBio} src={bio} alt="Experiance" />
//                     experiance
//                   </label>
//                 </ToggleTwo>
//                 <ToggleTwo>
//                   <label
//                     className={`${style.labelText} ${
//                       activeToggle === 'Skills' ? style.active : ''
//                     }`}
//                     onClick={() => handleToggleTwoClick('Skills')}
//                   >
//                     <img className={style.imgInfo} src={int} alt="Skills" />
//                     skills
//                   </label>
//                 </ToggleTwo>
//                 <ToggleTwo dropdownContent={<DropDownEducation />}>
//                   <label
//                     className={`${style.labelText} ${
//                       activeToggle === 'Certificates' ? style.active : ''
//                     }`}
//                     onClick={() => handleToggleTwoClick('Certificates')}
//                   >
//                     <img className={style.imgInfo} src={edu} alt="Certificates" />
//                     certificates
//                   </label>
//                 </ToggleTwo>
//               </>
//             }
//           >
//             <span className={style.spanText}>profesional-info</span>
//           </Toggle>
//           <Toggle
//             dropdownContent={
//               <>
//                 <ToggleTwo>
//                   <label
//                     className={`${style.labelText} ${
//                       activeToggle === 'bio' ? style.active : ''
//                     }`}
//                     onClick={() => handleToggleTwoClick('bio')}
//                   >
//                     <img className={style.imgBio} src={bio} alt="Bio" />
//                     bio
//                   </label>
//                 </ToggleTwo>
//                 <ToggleTwo>
//                   <label
//                     className={`${style.labelText} ${
//                       activeToggle === 'interests' ? style.active : ''
//                     }`}
//                     onClick={() => handleToggleTwoClick('interests')}
//                   >
//                     <img className={style.imgInfo} src={int} alt="Interests" />
//                     interests
//                   </label>
//                 </ToggleTwo>
//                 <ToggleTwo dropdownContent={<DropDownEducation />}>
//                   <label
//                     className={`${style.labelText} ${
//                       activeToggle === 'education' ? style.active : ''
//                     }`}
//                     onClick={() => handleToggleTwoClick('education')}
//                   >
//                     <img className={style.imgInfo} src={edu} alt="Education" />
//                     education
//                   </label>
//                 </ToggleTwo>
//               </>
//             }
//           >
//             <span className={style.spanText}>personal-info</span>
//           </Toggle>
//             <Toggle
//             dropdownContent={
//               <>
//                 <ToggleTwo>
//                   <label
//                     className={`${style.labelText} ${
//                       activeToggle === 'Music' ? style.active : ''
//                     }`}
//                     onClick={() => handleToggleTwoClick('Music')}
//                   >
//                     <img className={style.imgBio} src={bio} alt="Music" />
//                     music
//                   </label>
//                 </ToggleTwo>
//                 <ToggleTwo>
//                   <label
//                     className={`${style.labelText} ${
//                       activeToggle === 'Hiking' ? style.active : ''
//                     }`}
//                     onClick={() => handleToggleTwoClick('Hiking')}
//                   >
//                     <img className={style.imgInfo} src={int} alt="Hiking" />
//                     hiking
//                   </label>
//                 </ToggleTwo>
//                 <ToggleTwo >
//                   <label
//                     className={`${style.labelText} ${
//                       activeToggle === 'Books' ? style.active : ''
//                     }`}
//                     onClick={() => handleToggleTwoClick('Books')}
//                   >
//                     <img className={style.imgInfo} src={edu} alt="Books" />
//                     Books
//                   </label>
//                 </ToggleTwo>
//               </>
//             }
//           >
//             <span className={style.spanText}>hobbies</span>
//           </Toggle>
//         </div>
//         <Toggle dropdownContent={<DropdownContacts />}>
//           <span className={style.spanText}>contacts</span>
//         </Toggle>
//       </div>
//       <div className={style.left__content_wrapper}>{children}</div>
//       <div className={style.right__content_wrapper}>
//         <div className={style.content__title}></div>
//         <CodeSnippedBlock codeSnippetArr={codeSnippetArr} />
//       </div>
//     </div>
//   );
// };

// export default About;

import { useState } from 'react';
import style from './About.module.css';
import CodeSnippedBlock from '../../components/CodeSnipedBlock/CodeSnippedBlock';
import Toggle from '../../components/Toggle/Toogle';
import ToggleTwo from '../../components/ToggleTwo/ToggleTwo';
import bio from '../../components/ToggleTwo/ToogleTwoImg/bio.svg';
import int from '../../components/ToggleTwo/ToogleTwoImg/int.svg';
import edu from '../../components/ToggleTwo/ToogleTwoImg/edu.svg';
import profesional from "../About/AboutImg/profesional.svg";
import personal from "../About/AboutImg/personal.svg"
import hobby from '../About/AboutImg/hobby.svg'
import { DropdownContacts } from '../../components/DropdownContacts/DropdownContacts';
import DropDownEducation from '../../components/DropDownEducation/DropDownEducation';

const About = ({ codeSnippetArr, children }) => {
  const [activeToggle, setActiveToggle] = useState('');

  const handleToggleTwoClick = (toggleName) => {
    if (activeToggle === toggleName) {
      setActiveToggle('');
    } else {
      setActiveToggle(toggleName);
    }
  };

  console.log(codeSnippetArr);

  return (
    <div className={style.main}>
      <div className={style.sidebar}>
        <img className={`${style.imgOne} ${activeToggle === 'profesional-info' ? style.active : ''}`} src={profesional} />
        <img className={`${style.imgTwo} ${activeToggle === 'personal-info' ? style.active : ''}`} src={personal} />
        <img className={`${style.imgThree} ${activeToggle === 'hobbies' ? style.active : ''}`} src={hobby} />
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
                    onClick={() => handleToggleTwoClick('Experiance')}
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
                    onClick={() => handleToggleTwoClick('Skills')}
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
                    onClick={() => handleToggleTwoClick('Certificates')}
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
                    onClick={() => handleToggleTwoClick('bio')}
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
                    onClick={() => handleToggleTwoClick('interests')}
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
                    onClick={() => handleToggleTwoClick('education')}
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
                    onClick={() => handleToggleTwoClick('Music')}
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
                    onClick={() => handleToggleTwoClick('Hiking')}
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
                    onClick={() => handleToggleTwoClick('Books')}
                  >
                    <img className={style.imgInfo} src={edu} alt="Books" />
                    Books
                  </label>
                </ToggleTwo>
              </>
            }
          >
            <span className={style.spanText}>hobbies</span>
          </Toggle>
        </div>
    </div>
  );
};

export default About;



