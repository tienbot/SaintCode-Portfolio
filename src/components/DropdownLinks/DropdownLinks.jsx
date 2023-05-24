import React from 'react'
import LinkComponent from '../LinkComponent/LinkComponent'
import linkIcon from './assets/link.png'


export const DropdownLinks = () => {
  return (
    <div>
      <LinkComponent
        image={linkIcon}
        href="https://www.youtube.com/"
        text="YouTube channel"
      />
      <LinkComponent
        image={linkIcon}
        href="https://www.youtube.com/"
        text="GuruShots profile"
      />
      <LinkComponent
        image={linkIcon}
        href="https://www.youtube.com/"
        text="Instagram accaunt"
      />
      <LinkComponent
        image={linkIcon}
        href="https://www.youtube.com/"
        text="Twich profile"
      />
    </div>
  )
}
