import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props){
    return(<>
     <h1 className='text-center bg-light my-0'>{props.title}</h1>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className=" active nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Theme
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Dark</a></li>
            <li><a className="dropdown-item" href="/">Light</a></li>
            <li><a className="dropdown-item" href="/">Blue</a></li>
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