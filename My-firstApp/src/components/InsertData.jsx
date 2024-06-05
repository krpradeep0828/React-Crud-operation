import React, { useState } from "react";
import axios from 'axios'
function InsertData() {
  const [user, setUser] = useState({
    email: " ",
    password: " ",
    address: " ",
    address2: " ",
    city: " ",
  });

  const submitHandler =()=>{
    axios.post("http://localhost:3000/user",user)
  }
  return (
    <>
      <form onSubmit={submitHandler} className="row g-3 bg-secondary p-4">
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" onChange={(e) => setUser({ ...user, password: e.target.value })} />
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
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
            onChange={(e) => setUser({ ...user, address2: e.target.value })}
          />
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" onChange={(e) => setUser({ ...user, city: e.target.value })} />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Add Data
          </button>
        </div>
      </form>
    </>
  );
}

export default InsertData;
