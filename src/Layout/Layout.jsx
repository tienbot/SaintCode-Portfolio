import React from 'react'
import s from './Layout.module.css'

export const Layout = ({children}) => {
  return (
      <section className={s.page}>
        <div className={s.page__wrapper}>
            {children}
        </div>
    </section>
  )
}
