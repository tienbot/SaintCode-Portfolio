import style from "./About.module.css";
import Scrollbar from "../../ui/Scrollbar/Scrollbar.jsx";

const About = () => {
  return (
    <main className={style.main}>
      <div className={style.sidebar}></div>
      <div className={style.menu__wrapper}></div>
      <div className={style.left__content_wrapper}>
        <div className={style.content__title}>
          <div className={style.title__box}></div>
        </div>
        <Scrollbar />
      </div>
      <div className={style.right__content_wrapper}>
        <div className={style.content__title}></div>
        <Scrollbar />
      </div>
    </main>
  );
};

export default About;
