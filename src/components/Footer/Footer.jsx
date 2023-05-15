import style from "./Footer.module.css";
import git from "./git_logo.svg";
import instagram from "./instagram_logo.svg";
import facebook from "./facebook_logo.svg";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        <div className={style.find}>find me in:</div>
        <button className={style.instagram}>
          <img src={instagram} />
        </button>
        <button className={style.facebook}>
          <img src={facebook} />
        </button>
        <button className={style.username}>
          @username
          <img src={git} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
