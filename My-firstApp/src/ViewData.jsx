import React, { useEffect, useState } from 'react'
import axios from 'axios'
function ViewData() {

   const [users,setUsers]=useState([])

   useEffect(()=>{
    axios.get("http://localhost:3000/user")
    .then(res=>{
        setUsers(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
   },[])
   const list = users.map((user)=><tr key={user.id}>
    <td height='40px'>{user.email}</td>
    <td>{user.password}</td>
    <td>{user.address}</td>
    <td>{user.address2}</td>
    <td>{user.city}</td>
   </tr>)
  return (
    <div>
      <h1>View Data</h1>
      <hr />
      <table className="table" width="100%" >
        {list}
      </table>
    </div>
  )
}

export default ViewData
