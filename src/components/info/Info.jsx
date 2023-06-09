import s from "./Info.module.css";
import cross from "./cross.svg";

const Info = ({ title, description, content, infoRef, infoLinesArr }) => {
  let lastNum = 0;
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
      <div className={s.content}>
        <p className={s.text}>
          <span className={s.line__first}></span>
          <span className={s.line__elem}>1</span>&nbsp;&nbsp;&nbsp;/**
        </p>
        <p className={s.text}>
          <span className={s.line__first}></span>
          <span className={s.line__elem}>2</span>&nbsp;&nbsp;&nbsp;*&nbsp;
          {description}
        </p>
        {infoLinesArr.map((line, index) => {
          lastNum = index + 4;
          return (
            <p className={s.text} key={index}>
              <span className={s.line__num}>
                <span className={s.line__elem}> {index + 3} </span>

                <span className={s.line__elem}>&nbsp;&nbsp;&nbsp;*</span>
              </span>
              {line}
            </p>
          );
        })}
        <p className={s.p}>
          <span className={s.line__last}>{lastNum}</span>&nbsp;&nbsp;&nbsp;*/
        </p>
      </div>
    </div>
  );
};

export default Info;
