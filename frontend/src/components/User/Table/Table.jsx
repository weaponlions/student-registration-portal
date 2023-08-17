import React from 'react'
import TableData from './TableData'


export default function Table() {

  const arr =[
    {
      name:'nitin',
      course:'web dev',
      class:'12th',
      school:'phonics'
    },
    {
      name:'nitin2',
      course:'web dev2',
      class:'12th',
      school:'phonics'
    },
    {
      name:'nitin3',
      course:'web dev3',
      class:'12th',
      school:'phonics'
    }
  ]


  return (
    <div className='container'>
        <table class="table m-4 table-striped">
  <thead>
    {/* <tr>
      <th scope="col">S.no</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr> */}
  </thead>
  <tbody>


{/*////////// here we can apply map function on array of object we can get array of object from backend with api ----------------////////////////////////////////*/}

    {
      arr.map((e)=>{return <TableData data = {e}/>})
    }
    

  </tbody>
</table>
    </div>
  )
}
