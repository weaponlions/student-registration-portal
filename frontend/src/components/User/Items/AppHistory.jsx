import React, { useEffect ,useState} from 'react'
import {App_History} from '../../../api/index'
function AppHistory() {
// const [Courses, setCourses] = useState([]);

    useEffect(() => {
    App_History() 
    .then(async({data})=>{
      // await setCourses({data})
      // console.log(Courses)
        console.log(data);  
        // console.log(typeof(data));  
    })
    .catch((err)=>{return console.log(err)})

    }, [])
    
  return (
    <div>
        <table className="table table-hover">
  <thead>
    <tr>
 
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  
  
<tbody>
  
  {
    // for(let i =0;i<=data.length;i++){
    //    console.log('hoi')
    // }
   
  }
{/* {
  data.map((e)=>{
  return (
    <div>

  <tr>
    <td>{}</td>
    <td>{}</td>
    <td>{}</td>
  </tr>
    </div>
    )
})
} */}
  </tbody>
 
</table>
    </div>
  )
}

export default AppHistory