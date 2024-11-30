import React from 'react'
import PropTypes from 'prop-types'
import { Outlet, NavLink } from "react-router-dom";
export default function Navbar(props){
  console.log(props.Mode)
    return(<>
     <h1 className={`text-center bg-light my-0 ${(props.Mode==='Light')?'':'bg-black text-light'}`}>{props.title}</h1>
     <nav className={`navbar navbar-expand-lg ${(props.Mode==='Light')?'':'bg-black text-light'} bg-light`}>
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className={(e)=>{return e.isActive?"nav-link active btn btn-outline-success text-light":"nav-link active"}} style={{color: props.Mode==='Light'?"black":"white"}} aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(e)=>{return e.isActive?"nav-link active btn btn-outline-success text-light":"nav-link active"}} style={{color: props.Mode==='Light'?"black":"white"}} aria-current="page" to="/About">About</NavLink>
        </li>
        <li className="nav-item dropdown">
          <button className=" active nav-link dropdown-toggle" to="" style={{color: props.Mode==='Light'?"black":"white"}} role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Theme
          </button>
          <ul className="dropdown-menu" style={{padding:0}} >
            <li><button className="dropdown-item" onClick={props.TMD} style={{color: props.Mode==='Light'?"black":"white" , backgroundColor : props.Mode==='Light'?"rgb(245 245 245)":"black" , border:props.Mode==='Light'?'':'1px solid white'}} >Dark</button></li>
            <li><button className="dropdown-item" onClick={props.TML}  style={{color: props.Mode==='Light'?"black":"white" , backgroundColor : props.Mode==='Light'?"rgb(245 245 245)":"black" , border:props.Mode==='Light'?'':'1px solid white'}}>Light</button></li>
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