import React from 'react'
import { Link,useNavigate,Outlet } from "react-router-dom";

function IT() {
    const arr=[
        {
          s_no:'1',
        name:"Rohan Gupta", 
        App_no:"NHW98202223003",
        Couse:"web design" 
      },
      {
        s_no:'2',
        name:"Rohan Gupta", 
        App_no:"NHW98202223003",
        Couse:"web design" 
      },
      {
        s_no:'3',
        name:"Rohan Gupta", 
        App_no:"NHW98202223003",
        Couse:"web design" 
      },
      {
        s_no:'1',
      name:"Rohan Gupta", 
      App_no:"NHW98202223003",
      Couse:"web design" 
    },
    {
      s_no:'2',
      name:"Rohan Gupta", 
      App_no:"NHW98202223003",
      Couse:"web design" 
    },
    {
      s_no:'3',
      name:"Rohan Gupta", 
      App_no:"NHW98202223003",
      Couse:"web design" 
    },
    {
      s_no:'1',
    name:"Rohan Gupta", 
    App_no:"NHW98202223003",
    Couse:"web design" 
    },
    {
    s_no:'2',
    name:"Rohan Gupta", 
    App_no:"NHW98202223003",
    Couse:"web design" 
    },
    {
    s_no:'3',
    name:"Rohan Gupta", 
    App_no:"NHW98202223003",
    Couse:"web design" 
    },
    
    
    ]
  return (
  
<div className='py-4 container my-4' >
<div style={{display:'flex',justifyContent:'space-between'}}>
<div>

<h3 className='h1' ># Total enteries It</h3>
</div>
<div>
<form class="form-inline my-2 my-lg-0 d-flex ">
      <input class="form-control mr-sm-2 mx-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
</div>
</div>


  
  {
    arr.map((e)=>{return (<div>
        <table className='table p-2 table-striped table-bordered' >
<tbody>
           <tr>
      <th scope="row">{e.s_no}</th>
      <td>{e.name}</td>
      <td>{e.App_no}</td>
      <td >
        <button className='btn btn-outline-primary mx-2'><Link to="/AdminDashboard/courses/edit" target="_blank" style={{textDecoration:'none'}} >Edit</Link></button>
        <button className='btn btn-outline-primary '>Delete</button>
        <button className='btn btn-outline-primary mx-2'>Export</button>
        </td>
     
    </tr>
    </tbody>
    </table>
    </div>)})
  }



</div>


  )
}

export default IT