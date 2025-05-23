import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";
export default function Navbar(props){

   /// To update Theme
  const updateThem = (e) => {console.log(e.target.checked)
    if(e.target.checked){
      props.TMD()
  }
  else{
      props.TML()}
  }

    return(<>
     <h1 className={`text-center bg-light my-0 ${(props.Mode==='Light')?'':'bg-black text-light'}`}>{props.title}</h1>
    <nav className={`navbar navbar-expand-lg ${(props.Mode==='Light')?'':'bg-black text-light'} bg-light position-relative`}>

{/* Dropdown menu for language change */ }
<div className="dropdown position-absolute end-0 top-0 me-5 p-2">
  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i className="fa-solid fa-language" style={{fontSize:"22px"}}></i> language
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" onClick={()=>{props.setLan("en-US")}}>en-US</a>
    <a className="dropdown-item" onClick={()=>{props.setLan("hi-IN")}}>hi-IN</a>
    <a className="dropdown-item" onClick={()=>{props.setLan("ru-RU")}}>ru-RU</a>
  </div>
</div>



{/* Switch to toogle theam */ }
<span className='position-absolute end-0 top-3 px-2'>
  <span className="form-check form-switch">
<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={(e)=>{updateThem(e)}}/>
</span>

    </span>

  <div className="container-fluid">
  <button className={`navbar-toggler mb-1 ${(props.Mode==='Light')?'':'bg-light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
        <li className="nav-item text-center" >
          <NavLink className={(e)=>{return e.isActive?"nav-link active btn btn-outline-success text-light":"nav-link active"}} style={{color: props.Mode==='Light'?"black":"white"}} aria-current="page" to="/TextUtils/" end>Home</NavLink>
        </li>
        <li className="nav-item text-center">
          <NavLink className={(e)=>{return e.isActive?"nav-link active btn btn-outline-success text-light":"nav-link active"}} style={{color: props.Mode==='Light'?"black":"white"}} aria-current="page" to="/Textutils/About" end>About</NavLink>
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