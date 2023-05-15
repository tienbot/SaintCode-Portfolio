import style from "./Media.module.css";

const Media = ({ isUserName, children }) => {
  return <button className={style.btn}>{children}</button>;
};

export default Media;
