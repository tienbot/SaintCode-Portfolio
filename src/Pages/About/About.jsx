import style from "./About.module.css";
import CodeSnippedBlock from "../../components/CodeSnipedBlock/CodeSnippedBlock";

const About = ({ codeSnippetArr, children }) => {
  console.log(codeSnippetArr);
  return (
    <div className={style.main}>
      <div className={style.sidebar}></div>
      <div className={style.menu__wrapper}></div>
      <div className={style.left__content_wrapper}>{children}</div>
      <div className={style.right__content_wrapper}>
        <div className={style.content__title}></div>
        <CodeSnippedBlock codeSnippetArr={codeSnippetArr} />
      </div>
    </div>
  );
};

export default About;
