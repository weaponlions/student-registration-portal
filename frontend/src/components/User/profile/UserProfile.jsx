import React from 'react'
import photo from '../../../assets/images/photo.jpg'
import sign from '../../../assets/images/sign.png'
function UserProfile() {
  return (
    <section>
    <div className='container main-userPro ' >
        
        <div className='one-userPro my-4'>
            <div className='d-flex justify-content-center'>
            <figure  >
                <img src={photo} alt="photo" style={{width:'11rem',height:'11rem',borderRadius:'7rem',border:'1px solid blue',margin:'0 2rem'}}/>
            </figure>
            <figure>
                <img src={sign} alt="photo" style={{width:'11rem',height:'11rem',borderRadius:'4rem',border:'1px solid blue'}} />
            </figure>
            </div>
            
        <div style={{display:'flex',justifyContent:'center' }}>
    
    <button className = 'edit-button' style={{margin:'1rem 0',padding:'.5rem 3rem',border:'none',borderRadius:'.7rem',fontSize:'1.2rem'}}>Edit</button>
</div>
</div>


        <div className='two-userPro'>
  
       
 
 <table className="table table-bordered">
  
            <tbody>
              
                <tr>
             
       
                <th scope="row" colSpan={2} className="text-center h1">Candidate Details
               </th>
                
               
                </tr>
              <tr>
                <th scope="row">Candidate Name</th>
              <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/>
              </td>
        
              </tr>

              <tr>
                <th scope="row">Father's Name</th>
                <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/></td>


              </tr>

              <tr>
                <th scope="row">Mother Name</th>
                <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/></td>

              </tr>

              <tr>
                <th scope="row">Gender</th>
                <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/></td>

              </tr>

              <tr>
                <th scope="row">Date of Birth</th>
                <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/></td>

              </tr>

              <tr>
                <th scope="row">Email</th>
                <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/></td>

              </tr>

              <tr>
                <th scope="row">Marital Status</th>
                <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/></td>

              </tr>

              <tr>
                <th scope="row">Mobile No.</th>
                <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/></td>

              </tr>

              <tr>
                <th scope="row">Watsapp No.</th>
                <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/></td>

              </tr>

              <tr>
                <th scope="row">Religion</th>
                <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/></td>

              </tr>

              <tr>
                <th scope="row">Category</th>
                <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/></td>

              </tr>

              <tr>
                <th scope="row">PWD</th>
                <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/></td>

              </tr>
              
              <tr>
                <th scope="row">EWS</th>
                <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/></td>

              </tr>
              
          
            </tbody>
          
     
      </table>

  

      </div>
      <div className='three-userPro'>
      <table className="table table-bordered">
  
  <tbody>
    
      <tr>
   

      <th scope="row" colSpan={2} className="text-center h1">High School
     </th>
      
     
      </tr>
    <tr>
      <th scope="row">Class Name</th>
    <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/>
    </td>

    </tr>

    <tr>
      <th scope="row">Year of Passing</th>
      <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/></td>


    </tr>

    <tr>
      <th scope="row">Percentage</th>
      <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/></td>

    </tr>

    <tr>
      <th scope="row">School Name</th>
      <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/></td>

    </tr>

    <tr>
      <th scope="row">Board Name</th>
      <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/></td>

    </tr>

    <tr>
      <th scope="row">Division </th>
      <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/></td>

    </tr>

  </tbody>





</table>
      </div>



      <div className='four-userPro'>
      <table className="table table-bordered">
  
  <tbody>
    
      <tr>
   

      <th scope="row" colSpan={2} className="text-center h1">Intermediate School
     </th>
      
     
      </tr>
    <tr>
      <th scope="row">Class Name</th>
    <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/>
    </td>

    </tr>

    <tr>
      <th scope="row">Year of Passing</th>
      <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/></td>


    </tr>

    <tr>
      <th scope="row">Percentage</th>
      <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/></td>

    </tr>

    <tr>
      <th scope="row">School Name</th>
      <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/></td>

    </tr>

    <tr>
      <th scope="row">Board Name</th>
      <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/></td>

    </tr>

    <tr>
      <th scope="row">Division </th>
      <td><input type="text " style={{border:'none',padding:'.2rem 2rem',borderRadius:'.3rem'}}/></td>

    </tr>

  </tbody>





</table>
      </div>

    </div>
    </section>
  )
}

export default UserProfile