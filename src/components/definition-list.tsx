import React from 'react'
import clsx from 'clsx'

interface Props {
  data: string[][]
  variant?: 'compact'
}

export default function DefinitionList ({ data, variant }: Props) {
  return <dl className={clsx('definition-list', {
    [`definition-list--${variant}`]: variant
  })}>
    {data.map((point, index) => <React.Fragment key={index}>
      <dt>{point[0]}</dt>
      <dd dangerouslySetInnerHTML={({__html: point[1]})} />
    </React.Fragment>)}
  </dl>
}
