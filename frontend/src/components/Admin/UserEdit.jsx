import {React,useState }from 'react'
import Personal from '../User/Forms/Personal'
import Qualification from '../User/Forms/Qualification'
import Documents from '../User/Forms/Documents'


function UserEdit() {

  const [CATEGORY, setCATEGORY] = useState('')
const GetDetails =()=>{

  switch (CATEGORY) {
    case 'personal':
      return <Personal/>
      case 'qualification':
        return <Qualification/>
        case 'documents':
      return <Documents/>
  
    default:
      return <Personal/>
  }
}
    
  return (
<div className='container'>
<div className='d-flex container py-4  my-4'>
        <button className='btn btn-primary' onClick={()=>{return setCATEGORY('personal')}}>Personal details</button>
        <button className='btn btn-primary mx-2 ' onClick={()=>{return setCATEGORY('qualification')}}>Qualification</button>
        <button className='btn btn-primary' onClick={()=>{return setCATEGORY('documents')}}>Documents</button>
      </div>

<GetDetails/>


    </div>
  )
}

export default UserEdit