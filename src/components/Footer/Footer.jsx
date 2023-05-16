import style from "./Footer.module.css";
import git from "./git_logo.svg";
import instagram from "./instagram_logo.svg";
import facebook from "./facebook_logo.svg";
import Media from "../Media/Media.jsx";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        <div className={style.find}>find me in:</div>
        <div className={style.instagram}>
          <Media icon={instagram} href="https://instagram.com" />
        </div>
        <div className={style.facebook}>
          <Media icon={facebook} href="https://facebook.com" />
        </div>
        <div className={style.username}>
          <Media icon={git} userName="@username" href="https://github.com" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
