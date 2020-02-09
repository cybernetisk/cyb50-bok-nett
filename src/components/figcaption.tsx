import React from 'react'

interface Props {
  children: any
}

export default function Figcaption ({ children }: Props) {
  return (
    <figcaption className="figure__caption">
      {children}
    </figcaption>
  )
}
