import React from "react";
import {Link} from 'react-router-dom';
const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
       <Link to="/" className="navbar-brand d-flex d-lg-none">
            <h1 className="m-0 display-4 text-secondary"><span className="text-white">Farm</span>Fresh</h1>
       </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
               <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
               <Link to="/service" className="nav-item nav-link">Service</Link>
               <Link to="/" className="nav-item nav-link">Product</Link>
               <Link to="/contact" className="nav-item nav-link">Contact</Link>
                <div className="nav-item dropdown">
                   <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                    <div className="dropdown-menu m-0">
                       <Link to="/" className="dropdown-item">Blog Grid</Link>
                       <Link to="/" className="dropdown-item">Blog Detail</Link>
                       <Link to="/" className="dropdown-item">Features</Link>
                       <Link to="/" className="dropdown-item">The Team</Link>
                       <Link to="/" className="dropdown-item">Testimonial</Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    
    );
}
export default Navbar;