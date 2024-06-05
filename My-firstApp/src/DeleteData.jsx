import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
function DeleteData() {

   const [users,setUsers]=useState([])
    const {id}=useParams()

   useEffect(()=>{
    axios.get("http://localhost:3000/user")
    .then(res=>{
        setUsers(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
   },[]);

   const submitHandler =()=>{
    axios.delete(`http://localhost:3000/user/${id}`);
    // window.location.assign();
   }

   const list = users.map((user)=><tr key={user.id}>
    <td height='40px'>{user.email}</td>
    <td>{user.password}</td>
    <td>{user.address}</td>
    <td>{user.address2}</td>
    <td>{user.city}</td>
    <td><Link to={`../delete/${user.id}`} onClick={submitHandler}>Delete</Link></td>
   </tr>)
  return (
    <div>
      <h1>Delete Data</h1>
      <hr />
      <table className="table" width="100%" >
        {list}
      </table>
    </div>
  )
}

export default DeleteData
