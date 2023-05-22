import style from "./About.module.css";
import Info from "../../components/info/Info";

const About = ({ children }) => {
  return (
    <main className={style.main}>
      <div className={style.sidebar}></div>
      <div className={style.menu__wrapper}></div>
      <div className={style.left__content_wrapper}>
        {/* <div className={style.content__title}>
          <div className={style.title__box}></div>
        </div> */}
        {children}
      </div>
      <div className={style.right__content_wrapper}>
        <div className={style.content__title}></div>
      </div>
    </main>
  );
};

export default About;
