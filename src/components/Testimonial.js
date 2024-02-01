
import { useEffect } from "react";
import React from 'react';
import ReactOwlCarousel from "react-owl-carousel";
const altProp = "image no found"; 
const Testimonial = ()=>{
    
    
    return(
        <>
          <div className="container-fluid bg-testimonial py-5 mt-5" style={{marginBottom: '135px'}}>
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <ReactOwlCarousel className=" testimonial-carousel p-5">
                        <div className="testimonial-item text-center text-white">
                            <img className="img-fluid mx-auto p-2 border border-5 border-secondary rounded-circle mb-4" src="assets/img/testimonial-2.jpg" alt="hahah"/>
                            <p className="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                            <hr className="mx-auto w-25"/>
                            <h4 className="text-white mb-0">Client Name</h4>
                        </div>
                        <div className="testimonial-item text-center text-white">
                            <img className="img-fluid mx-auto p-2 border border-5 border-secondary rounded-circle mb-4" src="assets/img/testimonial-2.jpg" alt="haha" />
                            <p className="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                            <hr className="mx-auto w-25"/>
                            <h4 className="text-white mb-0">Client Name</h4>
                        </div>
                    </ReactOwlCarousel>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}
export default Testimonial;