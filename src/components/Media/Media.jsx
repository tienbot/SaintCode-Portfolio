import style from "./Media.module.css";

const Media = ({ href, userName, icon }) => {
  if (userName) {
    return (
      <a href={href} className={style.a__with_text} target="_blank">
        {userName}
        <img className={style.img__with_text} src={icon} />
      </a>
    );
  } else {
    return (
      <a href={href} className={style.a} target="_blank">
        <img className={style.img} src={icon} />
      </a>
    );
  }
};

export default Media;
