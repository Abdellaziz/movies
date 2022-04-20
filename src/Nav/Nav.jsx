import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {
  return (
    <div>
        <nav className="navbar navbar-expand-lg shadow  position-relative">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bolder" to="home">Noxi</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon  d-flex align-items-center justify-content-center"><i className="text-light fa-solid fa-bars-staggered"></i></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        {props.userdecod ? <>
        
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="net">Network</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="move">Movies</Link>
        </li>
        </>:''
        
      }

      </ul>
    </div>


    <div className="collapse navbar-collapse position-absolute end-0" id="navbarNav">
      <ul className="navbar-nav">
       {props.userdecod ?<>
        <li className="nav-item">
          <span className="nav-link out text-light" onClick={props.logOut}>Log out</span>
        </li>
       
       </>:
       <>
       
        
          <li className="nav-item">
          <Link className="nav-link" to="login">log in</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Register">Register</Link>
        </li>
       
      
       </> }
     
       
      </ul>
    </div>


  </div>
  
</nav>
    </div>
  )
}
