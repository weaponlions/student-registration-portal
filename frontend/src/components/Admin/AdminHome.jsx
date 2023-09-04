import React from 'react'
import nielitimg from '../../assets/images/nielit.jpeg'


export default function AdminHome() {
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
    <>
    <section>
      <div className='container d-flex my-4 p-auto'>

{/* --------------------////////// It Courses ////////////////////////////..-------------- */}

<div className=' d-flex justify-content-center flex-column card-admin w-50 '>

  {/* --------------------////////// inner div 1 ////////////////////////////..-------------- */}

  <div className='d-flex m-2'>
<h2 className='text-light'>IT Courses</h2>
<img src={nielitimg} alt="Nielit" style={{width:'7rem',height:'6rem',margin:'0 1rem'}}/>
  </div>

{/* --------------------////////// inner  div 2 ////////////////////////////..-------------- */}

<div className='d-flex mx-4'>
<h2 style={{fontSize:'3rem'}}>204</h2>
<p style={{margin:"0"}}>enteries</p>
{/* <button className='btn btn-info m-2 mx-4'>show</button> */}
  </div>

</div>


{/* --------------------////////// IT LETERACY COURSES ////////////////////////////..-------------- */}

<div className=' d-flex justify-content-center flex-column  mx-4 card-admin'>

  {/* --------------------////////// inner div 1 ////////////////////////////..-------------- */}

  <div className='d-flex m-2'>
<h2 className='text-light'>IT LETERACY COURSES</h2>
<img src={nielitimg} alt="Nielit" style={{width:'7rem',height:'6rem',margin:'0 1rem'}}/>
  </div>

{/* --------------------////////// inner  div 2 ////////////////////////////..-------------- */}

<div className='d-flex mx-4'>
<h2 style={{fontSize:'3rem'}}>204</h2>

<p style={{margin:"0"}}>enteries</p>
{/* <button className='btn btn-info m-2 mx-4'>show</button> */}

  </div>

</div>


{/* --------------------////////// SHORT TERM COURSES ////////////////////////////..-------------- */}

<div className=' d-flex justify-content-center flex-column card-admin'>

  {/* --------------------////////// inner div 1 ////////////////////////////..-------------- */}

  <div className='d-flex m-2'>
<h2 className='text-light'>SHORT TERM COURSES</h2>
<img src={nielitimg} alt="Nielit" style={{width:'7rem',height:'6rem',margin:'0 1rem'}}/>
  </div>

{/* --------------------////////// inner  div 2 ////////////////////////////..-------------- */}

<div className='d-flex mx-4'>
<h2 style={{fontSize:'3rem'}}>204</h2>

<p style={{margin:"0"}}>enteries</p>
{/* <button className='btn btn-info m-2 mx-4'>show</button> */}

  </div>

</div>

 </div>


    </section>
    </>
  )
}
