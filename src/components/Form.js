import { useState } from "react";

// const express = require('express');
// const cors = require('cors');
// const app = express();

// // Enable CORS for all routes
// app.use(cors());

// // ... your other routes and middleware

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const Form = ()=>{
    const[current, setCurrent]=useState({
        name:'',
        email:'',
        number:'',
        message:'',
    }) 

 const handleChange =(event)=>{
    const{name, value}= event.target;

    setCurrent((prevData)=>
       ( {
            ...prevData,
            [name]: value,
        })

    )
    
 }


const handleSubmit =(event)=>{
    event.preventDefault();
   console.log(current);
   handleRequest(current);
}
  const handleRequest=(current)=>{
    const url="https://script.google.com/macros/s/AKfycbwvZsLy6pECE8vlRohTfpmNifrYOdrTV7v0Ce40b7bgkRGGWPfUbqlNWfG5f820Df0GWg/exec";

    try{

       const response= fetch(url,{
        method: 'POST',
        header: {'content-type':'application/JSON',
        'Access-Control-Allow-Origin': '*'} ,
        body: JSON.stringify(current)

       });
       if(!response.ok){
         console.log(response.status());
       }
       else{
        console.error("failed to send data");
       }
    }
    catch(error){
       console.log("error");
    }
  }
    return(
        <>
        <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center mb-5" >
                <h6 className="text-primary text-uppercase">Contact Us</h6>
                <h1 className="display-5">Please Feel Free To Contact Us</h1>
            </div>
            <div className="row g-0">
                <div className="col-lg-7">
                    <div className="bg-primary h-100 p-5">
                        <form onSubmit={handleSubmit} >
                            <div className="row g-3">
                                <div className="col-6">
                                    <input type="text" className="form-control bg-light border-0 px-4" value={current.name} onChange={handleChange} name="name" placeholder="Your Name" style={{height: '55px'}}/>
                                </div>
                                <div className="col-6">
                                    <input type="email" className="form-control bg-light border-0 px-4" value={current.email} name="email" onChange={handleChange} placeholder="Your Email" style={{height: '55px'}}/>
                                </div>
                                <div className="col-12">
                                    <input type="number" className="form-control bg-light border-0 px-4" value={current.number} name="number" onChange={handleChange} placeholder="number" style={{height: '55px'}}/>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control bg-light border-0 px-4 py-3" rows="2" value={current.message} name="message" onChange={handleChange} placeholder="Message"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-secondary w-100 py-3" type="submit">submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="bg-secondary h-100 p-5">
                        <h2 className="text-white mb-4">Get In Touch</h2>
                        <div className="d-flex mb-4">
                            <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                                <i className="bi bi-geo-alt fs-4 text-white"></i>
                            </div>
                            <div className="ps-3">
                                <h5 className="text-white">Our Office</h5>
                                <span className="text-white">123 Street, New York, USA</span>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                                <i className="bi bi-envelope-open fs-4 text-white"></i>
                            </div>
                            <div className="ps-3">
                                <h5 className="text-white">Email Us</h5>
                                <span className="text-white">info@example.com</span>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                                <i className="bi bi-phone-vibrate fs-4 text-white"></i>
                            </div>
                            <div className="ps-3">
                                <h5 className="text-white">Call Us</h5>
                                <span className="text-white">+012 345 6789</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}
export default Form;