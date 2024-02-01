import Facts from '../components/Facts';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const About=()=>{
    return(<>
          <div className="container-fluid bg-primary py-5 bg-hero mb-5">
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className="display-1 text-white mb-md-4">About Us</h1>
                    <Link to="/" className="btn btn-primary py-md-3 px-md-5 me-3">Home</Link>
                    <Link to="/about" className="btn btn-secondary py-md-3 px-md-5">About Us</Link>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid about pt-5">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="d-flex h-100 border border-5 border-primary border-bottom-0 pt-4">
                        <img className="img-fluid mt-auto mx-auto" src="assets/img/about.png"/>
                    </div>
                </div>
                <div className="col-lg-6 pb-5">
                    <div className="mb-3 pb-2">
                        <h6 className="text-primary text-uppercase">About Us</h6>
                        <h1 className="display-5">We Produce Organic Food For Your Family</h1>
                    </div>
                    <p className="mb-4">Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet magna</p>
                    <div className="row gx-5 gy-4">
                        <div className="col-sm-6">
                            <i className="fa fa-seedling display-1 text-secondary"></i>
                            <h4>100% Organic</h4>
                            <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                        </div>
                        <div className="col-sm-6">
                            <i className="fa fa-award display-1 text-secondary"></i>
                            <h4>Award Winning</h4>
                            <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Facts/>

    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center mb-5">
                <h6 className="text-primary text-uppercase">The Team</h6>
                <h1 className="display-5">We Are Professional Organic Farmers</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <div className="row g-0">
                        <div className="col-10">
                            <div className="position-relative">
                                <img className="img-fluid w-100" src="assets/img/team-1.jpg" alt=""/>
                                <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4">
                                    <h4 className="text-white">Farmer Name</h4>
                                    <span className="text-white">Designation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                                <Link className="btn btn-square rounded-circle bg-white" to="#"><i className="fab fa-twitter text-secondary"></i></Link>
                                <Link className="btn btn-square rounded-circle bg-white" to="#"><i className="fab fa-facebook-f text-secondary"></i></Link>
                                <Link className="btn btn-square rounded-circle bg-white" to="#"><i className="fab fa-linkedin-in text-secondary"></i></Link>
                                <Link className="btn btn-square rounded-circle bg-white" to="#"><i className="fab fa-instagram text-secondary"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="row g-0">
                        <div className="col-10">
                            <div className="position-relative">
                                <img className="img-fluid w-100" src="assets/img/team-2.jpg" alt></img>
                                <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4">
                                    <h4 className="text-white">Farmer Name</h4>
                                    <span className="text-white">Designation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                                <Link className="btn btn-square rounded-circle bg-white" to="#"><i className="fab fa-twitter text-secondary"></i></Link>
                                <Link className="btn btn-square rounded-circle bg-white" to="#"><i className="fab fa-facebook-f text-secondary"></i></Link>
                                <Link className="btn btn-square rounded-circle bg-white" to="#"><i className="fab fa-linkedin-in text-secondary"></i></Link>
                                <Link className="btn btn-square rounded-circle bg-white" to="#"><i className="fab fa-instagram text-secondary"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="row g-0">
                        <div className="col-10">
                            <div className="position-relative">
                                <img className="img-fluid w-100" src="assets/img/team-3.jpg" alt=""/>
                                <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4" >
                                    <h4 className="text-white">Farmer Name</h4>
                                    <span className="text-white">Designation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                                <Link className="btn btn-square rounded-circle bg-white" to="#"><i className="fab fa-twitter text-secondary"></i></Link>
                                <Link className="btn btn-square rounded-circle bg-white" to="#"><i className="fab fa-facebook-f text-secondary"></i></Link>
                                <Link className="btn btn-square rounded-circle bg-white" to="#"><i className="fab fa-linkedin-in text-secondary"></i></Link>
                                <Link className="btn btn-square rounded-circle bg-white" to="#"><i className="fab fa-instagram text-secondary"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

   <Footer/>
    </>);
}

export default About;