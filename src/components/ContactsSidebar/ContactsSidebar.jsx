import React from 'react'
import Toggle from '../Toggle/Toogle'
import s from '../../Pages/Projects/Projects.module.sass'
import { DropdownContacts } from '../DropdownContacts/DropdownContacts'
import { DropdownLinks } from '../DropdownLinks/DropdownLinks'


export const ContactsSidebar = () => {
  return (
    <div>  
      <p className={s.mobileTitle}>_contact-me</p>
      <Toggle 
       dropdownContent={<DropdownContacts />}><label className={s.labelText}>contacts</label>
      </Toggle>
      <Toggle 
       dropdownContent={<DropdownLinks />}><label className={s.labelText}>find-me-also-in</label>
      </Toggle>
    </div>
  )
}
