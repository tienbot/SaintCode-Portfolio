import React from 'react'
import LinkComponent from '../LinkComponent/LinkComponent'
import mailIcon from './assets/mail.png'
import phoneIcon from './assets/phone.png'
import s from './DropdownContacts.module.scss'

export const DropdownContacts = () => {
  return (
    <div className={s.wrap}>
      <LinkComponent
        image={mailIcon}
        href="mailto:user@gmail.com"
        text="user@gmail.com"
      />
      <LinkComponent
        image={phoneIcon}
        href="tel:+3598246359"
        text="+3598246359"
      />
    </div>
  )
}
