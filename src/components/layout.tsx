import React, { ReactNode } from 'react'
import '../styles/index.scss'
import Helmet from 'react-helmet'
import clsx from 'clsx'

interface Props {
  children: ReactNode
  className?: string
}

export default function Layout ({
  children,
  className
}: Props) {
  if (typeof window !== 'undefined') setupKeyboardListeners()
  return <>
    <Helmet
      link={[
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Slab|Roboto:300,400' }
      ]}
    />
    <main className={clsx('layout', className)}>
      {children}
    </main>
  </>
}

function setupKeyboardListeners () {
  setTimeout(() => {
    setupKeyboardNavigation('link[rel="next"]', 'ArrowRight')
    setupKeyboardNavigation('link[rel="prev"]', 'ArrowLeft')
  }, 100)
}

function setupKeyboardNavigation (selector: string, code: string) {
  const element = document.querySelector(selector) as HTMLLinkElement
  if (element) {
    window.addEventListener('keyup', event => {
      if (event.code === code) {
        location.href = element.getAttribute('href')!
      }
    })
  }
}
