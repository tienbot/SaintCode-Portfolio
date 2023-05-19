import s from "./Info.module.css";
import cross from "./cross.svg";

const Info = ({ title, description, content, infoRef, infoLinesArr }) => {
  console.log(infoLinesArr);
  return (
    <div className={s.wrapper} ref={infoRef}>
      <div className={s.upper}>
        <div className={s.title}>
          <span className={s.title__span}>{title}</span>

          <button className={s.cross__btn}>
            <img src={cross} alt="cross" />
          </button>
        </div>
      </div>

      <p className={s.text}>
        <span className={s.line__first}></span>
        <span className={s.line__elem}>1</span>&nbsp;&nbsp;&nbsp;/**
      </p>
      <p className={s.text}>
        <span className={s.line__first}></span>
        <span className={s.line__second}>2</span>&nbsp;&nbsp;&nbsp;*&nbsp;
        {description}
      </p>
      {infoLinesArr.map((line, index) => (
        <p className={s.text} key={index}>
          <span className={s.line__num}>
            <span className={s.line__elem}> {index + 3} </span>

            <span className={s.line__elem}>*&nbsp;</span>
          </span>
          {line}
        </p>
      ))}
      <p className={s.p}>
        <span className={s.line__last}></span>&nbsp;&nbsp;&nbsp;*/
      </p>
    </div>
  );
};

export default Info;
