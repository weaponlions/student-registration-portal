import React from 'react'



export default function Table() {

  

  const details = {
    course_id: 'web dev', name: 'Nitin Kumar', father: 'Rohitash SIngh', mother: 'Sharma devi', gender: 'Male', dob: '01/01/2001', email: 'nitink4800', marital: 'Unmarried', category: 'Sc', pwd: 'No', religion: 'Hindu', mobile: '8842389432', whatsapp: '32432423432', 
  }


  return (
    <div className='container'>
        <table class="table m-4 table-striped table-bordered">
  <tbody>


  <tr>
      <th scope="row">Candidate Name</th>
      <td>{details.name}</td>
     
    </tr>

    <tr>
      <th scope="row">Father's Name</th>
      <td>{details.father}</td>
     
    </tr>

    <tr>
      <th scope="row">Mother Name</th>
      <td>{details.mother}</td>
     
    </tr>
    
    <tr>
      <th scope="row">Gender</th>
      <td>{details.gender}</td>
     
    </tr>

    <tr>
      <th scope="row">Date of Birth</th>
      <td>{details.dob}</td>
     
    </tr>

    <tr>
      <th scope="row">Email</th>
      <td>{details.email}</td>
     
    </tr>

    <tr>
      <th scope="row">Marital Status</th>
      <td>{details.marital}</td>
     
    </tr>

    <tr>
      <th scope="row">Mobile No.</th>
      <td>{details.mobile}</td>
     
    </tr>

    <tr>
      <th scope="row">Watsapp No.</th>
      <td>{details.whatsapp}</td>
     
    </tr>

    <tr>
      <th scope="row">Religion</th>
      <td>{details.religion}</td>
     
    </tr>

    <tr>
      <th scope="row">Category</th>
      <td>{details.category}</td>
     
    </tr>

    <tr>
      <th scope="row">PWD</th>
      <td>{details.pwd}</td>
     
    </tr>

 

   

  </tbody>
</table>
    </div>
  )
}
