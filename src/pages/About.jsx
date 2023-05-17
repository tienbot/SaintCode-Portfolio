import style from "./About.module.css";

const About = () => {
  return (
    <main>
      <div className={style.sidebar}></div>
      <div className={style.menu__wrapper}></div>
      <div className={style.content__wrapper_left}>
        <div className={style.separator}></div>
      </div>
      <div className={style.content__wrapper_right}>
        <div className={style.separator}></div>
      </div>
    </main>
  );
};

export default About;
