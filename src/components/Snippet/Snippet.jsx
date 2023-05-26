import s from "./Snipped.module.css";

const Snippet = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.user}>
          <img width="36" height="36" className={s.avatar} alt="Avatar" src='https://avatars.githubusercontent.com/u/111859297?v=4'/>
          <div className={s.title}>
            <p className={s.name}>@iliajuso</p>
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
      <div className={s.content}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, nisi
        tenetur! Ipsum, non? Facilis aspernatur ex in, nihil cum maiores,
        tempora illum eligendi recusandae iste sapiente beatae quo omnis quos.
      </div>
      {/* <div className={s.description}>
        <p className={s.text}></p>
        <button className={s.close__btn}></button>
      </div> */}
    </div>
  );
};

export default Snippet;
