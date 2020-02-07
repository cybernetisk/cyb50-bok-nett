import { Link } from 'gatsby'
import React from 'react'

interface Props {
  siteTitle: string;
}

export default function Header ({ siteTitle }: Props) {
  return (
    <header className="header">
      <Link to="/" className="header__link">{siteTitle}</Link>
      <img className="header__logo" src="/cyb50.svg" alt="CYB50 logo"/>
    </header>
  )
}
