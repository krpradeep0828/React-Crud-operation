import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <div className='col-4'>
      <ul>
        <li>
          <NavLink to="/insert">Insert Data</NavLink>
        </li>
        <li>
          <NavLink to="/view">View Data</NavLink>
        </li>
        <li>
          <NavLink to="/update">Update Data</NavLink>
        </li>
        <li>
          <NavLink to="/delete">Delete Data</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navigation

