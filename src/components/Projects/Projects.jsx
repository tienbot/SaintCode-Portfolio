import React from 'react'
import CustomToggle from '../Toggle/Toogle'
import { Check } from '../Check/Check'
export const Projects = () => {
  return (
    <CustomToggle
      arrowStyle="my-arrow-style"
      containerStyle="my-container-style"
      dropdownContent={<Check />}
    />
  )
}
