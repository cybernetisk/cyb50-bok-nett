import React, { PureComponent } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend
} from 'recharts'

// As we only have one chart in this site, we'll just insert the data here
// The "proper" way would be to take data as an input
const data = [
  { år: 1998, prosent: 8.7 },
  { år: 1999, prosent: 22.7 },
  { år: 2000, prosent: 10.7 },
  { år: 2001, prosent: 26.3 },
  { år: 2002, prosent: 16.3 },
  { år: 2003, prosent: 23.5 },
  { år: 2004, prosent: 20.7 },
  { år: 2005, prosent: 22.1 },
  { år: 2006, prosent: 21.5 },
  { år: 2007, prosent: 26.7 },
  { år: 2008, prosent: 24.1 },
  { år: 2009, prosent: 22.3 },
  { år: 2010, prosent: 19.6 },
  { år: 2011, prosent: 21.1 },
  { år: 2012, prosent: 21.2 },
  { år: 2013, prosent: 20.4 },
  { år: 2014, prosent: 19.7 },
  { år: 2015, prosent: 21.6 },
  { år: 2016, prosent: 25.0 },
  { år: 2017, prosent: 27.4 },
  { år: 2018, prosent: 30.1 }
]

export default class Chart extends PureComponent {
  render () {
    return (
      <BarChart
        width={getWidth()}
        height={300}
        data={data}
      >
        <XAxis dataKey="år"/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Bar dataKey="prosent" fill="#bababa"/>
      </BarChart>
    )
  }
}

function getWidth () {
  if (typeof window === 'undefined') return 300
  if (window.innerWidth > 750) return 650
  if (window.innerWidth > 400) return window.innerWidth - 100
  return 300
}
