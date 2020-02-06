import React, { ReactNode } from 'react'
import './layout.css'

interface Props {
  children: ReactNode
}

export default function Layout ({
  children
}: Props) {
  return (
    <main
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`
      }}
    >
      {children}
    </main>
  )
}
