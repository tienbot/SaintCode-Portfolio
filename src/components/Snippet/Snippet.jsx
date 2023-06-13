import s from "./Snipped.module.css";

const Snippet = ({ elem, children }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.user}>
          <img
            width="36"
            height="36"
            className={s.avatar}
            alt="Avatar"
            src={elem.owner?.avatar_url}
          />
          <div className={s.title}>
            <p className={s.name}>{elem?.owner?.login}</p>
            <p className={s.ago}></p>
          </div>
        </div>
        <div className={s.reaction}>
          <div className={s.details}>
            <div className={s.icon}></div>
            <div className={s.text}></div>
          </div>
          <div className={s.stars}>
            <div className={s.icon}></div>
            <div className={s.text}></div>
          </div>
        </div>
      </div>
      <div className={s.content}>{children}</div>
      {/* <div className={s.description}>
        <p className={s.text}></p>
        <button className={s.close__btn}></button>
      </div>{" "} */}
    </div>
  );
};

export default Snippet;
