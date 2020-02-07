import React from 'react'
import clsx from 'clsx'

interface Props {
  children: any
  position?: 'start' | 'end'
}

export default function Figure ({ children, position }: Props) {
  return (
    <figure className={clsx('figure', position && `figure--position figure--position-${position}`)}>
      {children}
    </figure>
  )
}
