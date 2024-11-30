import React from 'react'
import PropTypes from 'prop-types'
import { Outlet, NavLink } from "react-router-dom";
export default function Navbar(props){
    return(<>
     <h1 className='text-center bg-light my-0'>{props.title}</h1>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className={(e)=>{return e.isActive?"nav-link active btn btn-outline-success text-light":"nav-link active"}} aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(e)=>{return e.isActive?"nav-link active btn btn-outline-success text-light":"nav-link active"}} to="/About">About</NavLink>
        </li>
        <li className="nav-item dropdown">
          <button className=" active nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Theme
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" >Dark</button></li>
            <li><button className="dropdown-item" >Light</button></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
    )
}

 Navbar.propTypes = {
    title : PropTypes.string,
    aboutText : PropTypes.string
}

Navbar.defaultProps = {
  title : "TextUtils",
  aboutText : "About"
}