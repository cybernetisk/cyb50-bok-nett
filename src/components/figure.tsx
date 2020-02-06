import React from 'react'

interface Props {
  children: any
}

export default function Figure ({ children }: Props) {
  return (
    <figure>
      {children}
    </figure>
  )
}
