import React from 'react'
import clsx from 'clsx'
import Copyright from './copyright'

interface Props {
  className?: string
}

export default function AboutPage ({ className }: Props) {
  return <section className={clsx(className)}>
    <h2>Om siden</h2>
    <p>
      Siden er laget av <a href="https://icanhasweb.net/">Arne Hassel</a> og Mats Schjølberg. Du finner kildekoden
      tilgjengelig på <a href="https://github.com/cybernetisk/cyb50-bok-nett">GitHub</a>.
    </p>
    <p>
      <Copyright />
    </p>
  </section>
}
