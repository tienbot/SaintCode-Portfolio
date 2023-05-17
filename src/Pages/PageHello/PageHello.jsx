import React from 'react'
import s from './PageHello.module.css'
import boltUpLeft from './assets/bolt-up-left.svg'
import boltUpRight from './assets/bolt-up-right.svg'
import boltDownLeft from './assets/bolt-down-left.svg'
import boltDownRight from './assets/bolt-down-right.svg'

export const PageHello = () => {
  return (
    <main>
        <div className={s.pageHello__text}>
            <div className={s.pageHello__text_top}>
                <p className={s.pageHello__textSuptext}>Hi all. I am</p>
                <h1>Micheal Weaver</h1>
                <p className={s.pageHello__textSubtext}>&gt;Front-end developer</p>
            </div>
            <div className={s.pageHello__text_bottom}>
                <p>&#47;&#47;complete the game to continue</p>
                <p>&#47;&#47;you can also see it on my Github page</p>
                <p><span className={s.blue}>const</span> <span className={s.green}>githubLink</span><span className={s.white}> = </span> 
                <a href="“https://github.com/example/url”">“https://github.com/example/url”</a>
                </p>
            </div>
        </div>
        <div className={s.pageHello__game}>
            <div className={s.game__wrapper}>
                <div className={s.game__field}></div>
                <div className={s.game__components}>
                    <div className={s.game__control}>
                        <p className={s.white}>&#47;&#47; use keyboard</p>
                        <p className={s.white}>&#47;&#47;arrows to play</p>
                    </div>
                </div>

                <img className={s.bolt__UpLeft} src={boltUpLeft} alt="" />
                <img className={s.bolt__UpRight} src={boltUpRight} alt="" />
                <img className={s.bolt__DownLeft} src={boltDownLeft} alt="" />
                <img className={s.bolt__DownRight} src={boltDownRight} alt="" />
            </div>
            <div className={s.blurGreen}></div>
            <div className={s.blurBlue}></div>
        </div>
        {/* <img className={s.game__blur} src={blur} alt="" /> */}
    </main>
    );
};
