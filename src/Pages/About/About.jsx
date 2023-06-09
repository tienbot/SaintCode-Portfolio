import { useState } from 'react';
import style from "./About.module.css";
import CodeSnippedBlock from "../../components/CodeSnipedBlock/CodeSnippedBlock";
import Toggle from "../../components/Toggle/Toogle";
import ToggleTwo from "../../components/ToggleTwo/ToggleTwo";
import bio from "../../components/ToggleTwo/ToogleTwoImg/bio.svg";
import int from "../../components/ToggleTwo/ToogleTwoImg/int.svg";
import edu from "../../components/ToggleTwo/ToogleTwoImg/edu.svg";
import { DropdownContacts } from "../../components/DropdownContacts/DropdownContacts";

const About = ({ codeSnippetArr, children }) => {
  const [showEducation, setShowEducation] = useState(false);

  const handleEducationToggle = () => {
    setShowEducation(!showEducation);
  };

  console.log(codeSnippetArr);

  return (
    <div className={style.main}>
        <div className={style.wrapper}>
            <p className={style.mobileTitle}>_about-me</p>
            <div className={style.sidebar}></div>
            <div className={style.menu__wrapper}>
                <div className={style.toggleTwo}>
                    <Toggle
                        dropdownContent={<>
                            <ToggleTwo>
                            <label className={style.labelText}>
                                <img className={style.imgBio} src={bio} alt="Bio" />
                                bio
                            </label>
                            </ToggleTwo>
                            <ToggleTwo>
                            <label className={style.labelText}>
                                <img className={style.imgInfo} src={int} alt="Interests" />
                                interests
                            </label>
                            </ToggleTwo>
                            <ToggleTwo dropdownContent>
                            <label className={style.labelText}>
                                <img className={style.imgInfo} src={edu} alt="Education" />
                                education
                            </label>
                            </ToggleTwo>
                        </>}
                    >
                        <span className={style.spanText}>personal-info</span>
                    </Toggle>
                    <Toggle dropdownContent={<DropdownContacts />}>
                        <span className={style.spanText}>contacts</span>
                    </Toggle>
                </div>
            </div>
        </div>
        <div className={style.content}>
            <div className={style.left__content_wrapper}>{children}</div>
            <div className={style.right__content_wrapper}>
                <div className={style.content__title}></div>
                <CodeSnippedBlock codeSnippetArr={codeSnippetArr} />
            </div>
        </div>
    </div>
  );
};

export default About;

