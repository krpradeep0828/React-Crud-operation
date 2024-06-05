import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function EditData() {
  const [user, setUser] = useState({
    email: " ",
    password: " ",
    address: " ",
    address2: " ",
    city: " ",
  });

  const {id} =useParams()

  useEffect(()=>{
    axios.get(`http://localhost:3000/user/${id}`)
    .then(res=>{
        setUser(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
   },[])

  const submitHandler = () => {
    axios.patch(`http://localhost:3000/user/${id}`, user);
  };
  return (
    <>
      <h1>Edit Data {id}</h1>
      <hr />
      <form onSubmit={submitHandler} className="row g-3 bg-secondary p-4">
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            value={user.address}
            onChange={(e) => setUser({ ...user, address: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label for="inputAddress2" className="form-label">
            Address 2
          </label>
          <input
            type="text"
            className="form-control"
            value={user.address2}
            onChange={(e) => setUser({ ...user, address2: e.target.value })}
          />
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            value={user.city}
            onChange={(e) => setUser({ ...user, city: e.target.value })}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Update Data
          </button>
        </div>
      </form>
    </>
  );
}

export default EditData;
