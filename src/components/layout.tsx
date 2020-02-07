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
