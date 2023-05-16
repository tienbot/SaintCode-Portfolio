import React from 'react'
import s from './PageHello.module.css'

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
                        <p className={s.pageHello__textSubtext}>Front-end developer</p>
                    </div>
                    <div className={s.pageHello__text_bottom}>
                        <p>complete the game to continue</p>
                        <p>you can also see it on my Github page</p>
                        <p>const githubLink = 
                        <a href="“https://github.com/example/url”">“https://github.com/example/url”</a>
                        </p>
                    </div>
                </div>
                <div className={s.pageHello__game}>
                    <div className={s.game__wrapper}></div>
                </div>
            </main>
            <footer>Футер</footer>
        </div>
    </section>
  )
}
