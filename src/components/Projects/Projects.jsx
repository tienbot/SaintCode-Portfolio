import React from 'react'
import Toggle from '../Toggle/Toogle'
import { Check } from '../Check/Check'
import s from "./Projects.module.sass"
export const Projects = () => {
  return (
    <Toggle
      arrowStyle="my-arrow-style"
      containerStyle="my-container-style"
      dropdownContent={<Check />}><label className={s.labelText}>projects</label>
      
    </Toggle>
  )
}
