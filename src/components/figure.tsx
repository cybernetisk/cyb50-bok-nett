import React from 'react'

interface Props {
  children: any
}

export default function ({ children }: Props) {
  return (
    <figure>
      {children}
    </figure>
  )
}
