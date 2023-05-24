import React from 'react'
// import s from './Contacts.module.scss'
import { Form } from '../../components/Form/Form'
import { ContactsSidebar } from '../../components/ContactsSidebar/ContactsSidebar'

export const Contacts = () => {
  return (
    <section>
      <ContactsSidebar />
      <Form/>
    </section>

  )
}
