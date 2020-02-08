import React from 'react'

interface Props {
  data: string[][]
}

export default function DefinitionList ({ data }: Props) {
  return <dl>
    {data.map((point, index) => <React.Fragment key={index}>
      <dt>{point[0]}</dt>
      <dd>{point[1]}</dd>
    </React.Fragment>)}
  </dl>
}
