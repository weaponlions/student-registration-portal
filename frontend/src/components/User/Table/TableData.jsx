import React from 'react'

export default function TableData(props) {
const {data} = props
  return (
    <>
         
    <tr>
      {/* <th scope="row">1</th> */}
      <td>{data.name}</td>
      <td>{data.course}</td>
      <td>{data.class}</td>
      <td>{data.school}</td>
    </tr>

    </>

  )
}
