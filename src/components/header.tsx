import { Link } from 'gatsby'
import React from 'react'

interface Props {
  siteTitle: string;
}

export default function Header ({ siteTitle }: Props) {
  return (
    <Link to="/" className="header">
      <span className="header__title">{siteTitle}</span>
      <img className="header__logo" src="/cyb50.svg" alt="CYB50 logo"/>
    </Link>
  )
}
