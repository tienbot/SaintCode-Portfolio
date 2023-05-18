import React from 'react'
import Toggle from '../Toggle/Toogle'
import { Check } from '../Check/Check'
export const Projects = () => {
  return (
    <Toggle
      arrowStyle="my-arrow-style"
      containerStyle="my-container-style"
      dropdownContent={<Check />}
    />
  )
}
