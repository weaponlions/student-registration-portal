import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Table() {
  const location = useLocation();
  const navigate = useNavigate();
  const [detail, setDetail] = useState(location.state);

  // const detail = {
  //   course_id: 'web dev', name: 'Nitin Kumar', father: 'Rohitash SIngh', mother: 'Sharma devi', gender: 'Male', dob: '01/01/2001', email: 'nitink4800', marital: 'Unmarried', category: 'Sc', pwd: 'No', religion: 'Hindu', mobile: '8842389432', whatsapp: '32432423432',
  // }
 

  return (
    <div className="container w-75 d-flex justify-content-center">
      <div className="container m-5 w-100"> 
      <table className="table table-striped table-bordered">
        {detail && detail.userData && (
          <>
            <tbody>
              <tr>
                <th scope="row" colSpan={2} className="text-center">Candidate Details</th> 
              </tr>

              <tr>
                <th scope="row">Candidate Name</th>
                <td>{detail.userData.name}</td>
              </tr>

              <tr>
                <th scope="row">Father's Name</th>
                <td>{detail.userData.father}</td>
              </tr>

              <tr>
                <th scope="row">Mother Name</th>
                <td>{detail.userData.mother}</td>
              </tr>

              <tr>
                <th scope="row">Gender</th>
                <td>{detail.userData.gender}</td>
              </tr>

              <tr>
                <th scope="row">Date of Birth</th>
                <td>{detail.userData.dob}</td>
              </tr>

              <tr>
                <th scope="row">Email</th>
                <td>{detail.userData.email}</td>
              </tr>

              <tr>
                <th scope="row">Marital Status</th>
                <td>{detail.userData.marital}</td>
              </tr>

              <tr>
                <th scope="row">Mobile No.</th>
                <td>{detail.userData.mobile}</td>
              </tr>

              <tr>
                <th scope="row">Watsapp No.</th>
                <td>{detail.userData.whatsapp}</td>
              </tr>

              <tr>
                <th scope="row">Religion</th>
                <td>{detail.userData.religion}</td>
              </tr>

              <tr>
                <th scope="row">Category</th>
                <td>{detail.userData.category}</td>
              </tr>

              <tr>
                <th scope="row">PWD</th>
                <td>{detail.userData.pwd}</td>
              </tr>
              
              <tr>
                <th scope="row">EWS</th>
                <td>{detail.userData.ews}</td>
              </tr>
              
              <tr>
                <th scope="row">Permanent Address</th>
                <td>{`${detail.userAdrs1.full_address},${detail.userAdrs1.city},${detail.userAdrs1.district},${detail.userAdrs1.state}-${detail.userAdrs1.pincode}`}</td>
              </tr>

              <tr>
                <th scope="row">Correspond Address</th>
                <td>{`${detail.userAdrs2.full_address},${detail.userAdrs2.city},${detail.userAdrs2.district},${detail.userAdrs2.state}-${detail.userAdrs2.pincode}`}</td>
              </tr>
            </tbody>
          </>
        )}
      </table>
      <div className="container w-100 d-flex justify-content-center">
        <div>
          <span className="btn btn-primary m-2" onClick={() => navigate(-1)} >Edit</span>
          <span className="btn btn-primary m-2" onClick={() => navigate('../user/step_two')} >Save</span>
        </div>
      </div>
      </div>
    </div>
  );
}
