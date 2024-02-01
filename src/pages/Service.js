import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

import { Link } from "react-router-dom";

const Service=()=>{
    return(
        <>
    <div className="container-fluid bg-primary py-5 bg-hero mb-5">
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className="display-1 text-white mb-md-4">Our Services</h1>
                    <Link to="" className="btn btn-primary py-md-3 px-md-5 me-3">Home</Link>
                    <Link to="" className="btn btn-secondary py-md-3 px-md-5">Services</Link>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <div className="mb-3">
                        <h6 className="text-primary text-uppercase">Services</h6>
                        <h1 className="display-5">Organic Farm Services</h1>
                    </div>
                    <p className="mb-4">Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et tempor sit. Clita erat ipsum et lorem et sit sed stet labore</p>
                    <Link to="" className="btn btn-primary py-md-3 px-md-5">Contact Us</Link>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light text-center p-5">
                        <i className="fa fa-carrot display-1 text-primary mb-3"></i>
                        <h4>Fresh Vegetables</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light text-center p-5">
                        <i className="fa fa-apple-alt display-1 text-primary mb-3"></i>
                        <h4>Fresh Fruits</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light text-center p-5">
                        <i className="fa fa-dog display-1 text-primary mb-3"></i>
                        <h4>Healty Cattle</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light text-center p-5">
                        <i className="fa fa-tractor display-1 text-primary mb-3"></i>
                        <h4>Modern Truck</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light text-center p-5">
                        <i className="fa fa-seedling display-1 text-primary mb-3"></i>
                        <h4>Farming Plans</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Testimonial/>
    <Footer/>
        </>
    );
}
export default Service;