import { Link } from "react-router-dom";

const Footer =()=>{
    return(
        <>
          <div className="container-fluid bg-footer bg-primary text-white mt-5">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-8 col-md-6">
                    <div className="row gx-5">
                        <div className="col-lg-4 col-md-12 pt-5 mb-5">
                            <h4 className="text-white mb-4">Get In Touch</h4>
                            <div className="d-flex mb-2">
                                <i className="bi bi-geo-alt text-white me-2"></i>
                                <p className="text-white mb-0">123 Street, New York, USA</p>
                            </div>
                            <div className="d-flex mb-2">
                                <i className="bi bi-envelope-open text-white me-2"></i>
                                <p className="text-white mb-0">info@example.com</p>
                            </div>
                            <div className="d-flex mb-2">
                                <i className="bi bi-telephone text-white me-2"></i>
                                <p className="text-white mb-0">+012 345 67890</p>
                            </div>
                            <div className="d-flex mt-4">
                                <Link className="btn btn-secondary btn-square rounded-circle me-2" href="#"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-secondary btn-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-secondary btn-square rounded-circle me-2" href="#"><i className="fab fa-linkedin-in"></i></Link>
                                <Link className="btn btn-secondary btn-square rounded-circle" href="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <div className="d-flex flex-column justify-content-start">
                                <Link className="text-white mb-2" href="#"><i className="bi bi-arrow-right text-white me-2"></i>Home</Link>
                                <Link className="text-white mb-2" href="#"><i className="bi bi-arrow-right text-white me-2"></i>About Us</Link>
                                <Link className="text-white mb-2" href="#"><i className="bi bi-arrow-right text-white me-2"></i>Our Services</Link>
                                <Link className="text-white mb-2" href="#"><i className="bi bi-arrow-right text-white me-2"></i>Meet The Team</Link>
                                <Link className="text-white mb-2" href="#"><i className="bi bi-arrow-right text-white me-2"></i>Latest Blog</Link>
                                <Link className="text-white" href="#"><i className="bi bi-arrow-right text-white me-2"></i>Contact Us</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                            <h4 className="text-white mb-4">Popular Links</h4>
                            <div className="d-flex flex-column justify-content-start">
                                <Link className="text-white mb-2" href="#"><i className="bi bi-arrow-right text-white me-2"></i>Home</Link>
                                <Link className="text-white mb-2" href="#"><i className="bi bi-arrow-right text-white me-2"></i>About Us</Link>
                                <Link className="text-white mb-2" href="#"><i className="bi bi-arrow-right text-white me-2"></i>Our Services</Link>
                                <Link className="text-white mb-2" href="#"><i className="bi bi-arrow-right text-white me-2"></i>Meet The Team</Link>
                                <Link className="text-white mb-2" href="#"><i className="bi bi-arrow-right text-white me-2"></i>Latest Blog</Link>
                                <Link className="text-white" href="#"><i className="bi bi-arrow-right text-white me-2"></i>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-lg-n5">
                    <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-secondary p-5">
                        <h4 className="text-white">Newsletter</h4>
                        <h6 className="text-white">Subscribe Our Newsletter</h6>
                        <p>Amet justo diam dolor rebum lorem sit stet sea justo kasd</p>
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control border-white p-3" placeholder="Your Email"/>
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark text-white py-4">
        <div className="container text-center">
            <p className="mb-0">&copy; <Link className="text-secondary fw-bold" href="/">Your Site Name</Link>. All Rights Reserved. Designed by <Link className="text-secondary fw-bold" href="https://htmlcodex.com">HTML Codex</Link></p>
            <br/>Distributed By: <Link className="text-secondary fw-bold" href="https://themewagon.com" target="_blank">ThemeWagon</Link>
        </div>
    </div>
        </>
    )
}

export default Footer;