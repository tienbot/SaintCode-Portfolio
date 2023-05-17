import style from "./Media.module.css";

const Media = ({ href, userName, icon }) => {
  if (userName) {
    return (
      <a
        href={href}
        className={style.a__with_text}
        target="_blank"
        rel="noreferrer"
      >
        {userName}
        <img className={style.img__with_text} src={icon} alt="icon" />
      </a>
    );
  } else {
    return (
      <a href={href} className={style.a} target="_blank" rel="noreferrer">
        <img className={style.img} src={icon} alt="icon" />
      </a>
    );
  }
};

export default Media;
