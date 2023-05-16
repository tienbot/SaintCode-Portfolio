import React from 'react'
import s from './PageHello.module.css'
import blur from './assets/Background Blurs.png'

export const PageHello = () => {
  return (
    <section className={s.pageHello}>
        <div className={s.pageHello__wrapper}>
            <header>Хедер</header>
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
                    <div className={s.game__wrapper}></div>
                </div>
                <img className={s.game__blur} src={blur} alt="" />
            </main>
            <footer>Футер</footer>
        </div>
    </section>
  )
}
