import React from 'react'
import clsx from 'clsx'

type alignment = 'start' | 'center' | 'end'

interface SpecialCellData {
  align: alignment
  span: number
  value: string
}

type CellData = null | number | string | SpecialCellData
type RowData = CellData[]

// As we only have one table on this site, we'll just insert the data here
// The "proper" way would be to take data as an input
const caption = 'Opptak av studenter til Ifi 1998–2018'
const align: alignment[] = ['start', 'end', 'end', 'end', 'end', 'end', 'end', 'end']
const head: RowData[] = [
  [
    null,
    { align: 'center', span: 2, value: 'Laveregrad' },
    { align: 'center', span: 2, value: 'Master' },
    { align: 'center', span: 2, value: 'Profesjon' },
    null
  ],
  [
    null,
    { align: 'center', span: 1, value: 'Kvinner' },
    { align: 'center', span: 1, value: 'Menn' },
    { align: 'center', span: 1, value: 'Kvinner' },
    { align: 'center', span: 1, value: 'Menn' },
    { align: 'center', span: 1, value: 'Kvinner' },
    { align: 'center', span: 1, value: 'Menn' },
    'Kvinner %'
  ]
]
const data: RowData[] = [
  [1998, '', '', 10, 105, '', '', '8,7%'],
  [1999, '', '', 25, 85, '', '', '22,7%'],
  [2000, '', '', 15, 125, '', '', '10,7%'],
  [2001, '', '', 40, 100, 10, 40, '26,3%'],
  [2002, '', '', 25, 135, 15, 70, '16,3%'],
  [2003, 70, 215, 60, 165, 10, 75, '23,5%'],
  [2004, 70, 270, 45, 150, 5, 40, '20,7%'],
  [2005, 45, 135, 30, 120, 10, 45, '22,1%'],
  [2006, 60, 185, 30, 130, 10, 50, '21,5%'],
  [2007, 85, 185, 20, 85, 15, 60, '26,7%'],
  [2008, 75, 190, 20, 70, 5, 55, '24,1%'],
  [2009, 75, 210, 30, 130, 10, 60, '22,3%'],
  [2010, 65, 305, 45, 145, '', '', '19,6%'],
  [2011, 85, 310, 35, 140, '', '', '21,1%'],
  [2012, 75, 310, 50, 155, '', '', '21,2%'],
  [2013, 100, 345, 40, 200, '', '', '20,4%'],
  [2014, 85, 310, 40, 200, '', '', '19,7%'],
  [2015, 95, 340, 55, 205, '', '', '21,6%'],
  [2016, 130, 350, 60, 220, '', '', '25,0%'],
  [2017, 155, 340, 75, 270, '', '', '27,4%'],
  [2018, 165, 315, 55, 195, '', '', '30,1%']
]

export default function Table () {
  return <div className="table">
    <table>
      <thead>
      {head.map(Row)}
      </thead>
      <tbody>
      {data.map(Row)}
      </tbody>
      <caption>{caption}</caption>
    </table>
  </div>
}

function Row (data: RowData, rowIndex: number) {
  return <tr key={`row-${rowIndex}`} className={clsx({
    'table__row--odd': rowIndex % 2 === 1,
    'table__row--even': rowIndex % 2 === 0
  })}>
    {data.map((cellData, cellIndex) => Cell(cellData, cellIndex, rowIndex))}
  </tr>
}

function Cell (data: CellData, cellIndex: number, rowIndex: number) {
  const key = `cell-${rowIndex}-${cellIndex}`
  if (data === null) return <td key={key} style={{ background: 'transparent', border: 0 }}>&nbsp;</td>
  if (typeof data === 'object') return SpecialCell(data as SpecialCellData, key)
  return <td key={key} style={{ textAlign: align[cellIndex] }}>{data}</td>
}

function SpecialCell (data: SpecialCellData, key: string) {
  return <td key={key} colSpan={data.span} style={{ textAlign: data.align }}>{data.value}</td>
}
