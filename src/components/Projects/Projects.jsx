import React from 'react'
import Toggle from '../Toggle/Toogle'
import { Check } from '../Check/Check'
import s from "./Projects.module.sass"
export const Projects = () => {
  return (
    <main className={s.main}>
      <div className={s.wrapper}>
    <Toggle
       dropdownContent={<Check />}><label className={s.labelText}>projects</label>
        </Toggle>
      </div>
      </main>
  )
}
