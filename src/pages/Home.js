import { Link } from "react-router-dom";

import Footer from '../components/Footer';
import Testimonial from "../components/Testimonial";
import OwlTest from "../components/OwlTest";
function Extend(){
    return(<>
       <OwlTest/> 
    <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="assets/img/carousel-1.jpg" alt="Image"/>
                    <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                        <div className="text-start p-5">
                            <h3 className="text-white">Organic Vegetables</h3>
                            <h1 className="display-1 text-white mb-md-4">Organic Vegetables For Healthy Life</h1>
                          <Link to ="/" className="btn btn-primary py-md-3 px-md-5 me-3">Explore</Link>
                           <Link to ="/" className="btn btn-secondary py-md-3 px-md-5">Contact</Link>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="assets/img/carousel-2.jpg" alt="Image"/>
                    <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                        <div className="text-start p-5">
                            <h3 className="text-white">Organic Fruits</h3>
                            <h1 className="display-1 text-white mb-md-4">Organic Fruits For Better Health</h1>
                           <Link to ="/" className="btn btn-primary py-md-3 px-md-5 me-3">Explore</Link>
                           <Link to ="/" className="btn btn-secondary py-md-3 px-md-5">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    <div className="container-fluid banner mb-5">
        <div className="container">
            <div className="row gx-0">
                <div className="col-md-6">
                    <div className="bg-primary bg-vegetable d-flex flex-column justify-content-center p-5" style={{'height': '300px'}}>
                        <h3 className="text-white mb-3">Organic Vegetables</h3>
                        <p className="text-white">Dolor magna ipsum elitr sea erat elitr amet ipsum stet justo dolor, amet lorem diam no duo sed dolore amet diam</p>
                       <Link to ="/" className="text-white fw-bold">Read More<i className="bi bi-arrow-right ms-2"></i></Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="bg-secondary bg-fruit d-flex flex-column justify-content-center p-5" style={{height: '300px'}}>
                        <h3 className="text-white mb-3">Organic Fruits</h3>
                        <p className="text-white">Dolor magna ipsum elitr sea erat elitr amet ipsum stet justo dolor, amet lorem diam no duo sed dolore amet diam</p>
                       <Link to ="/" className="text-white fw-bold">Read More<i className="bi bi-arrow-right ms-2"></i></Link>
                    </div>
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

    <div className="container-fluid bg-primary facts py-5 mb-5">
        <div className="container py-5">
            <div className="row gx-5 gy-4">
                <div className="col-lg-3 col-md-6">
                    <div className="d-flex">
                        <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-star fs-4 text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="text-white">Our Experience</h5>
                            <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="d-flex">
                        <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-users fs-4 text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="text-white">Farm Specialist</h5>
                            <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="d-flex">
                        <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '60px', 'height': '60px'}}>
                            <i className="fa fa-check fs-4 text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="text-white">Complete Project</h5>
                            <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="d-flex">
                        <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-mug-hot fs-4 text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="text-white">Happy Clients</h5>
                            <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                        </div>
                    </div>
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
                   <Link to ="/" className="btn btn-primary py-md-3 px-md-5">Contact Us</Link>
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
  
    <div className="container-fluid bg-primary feature py-5 pb-lg-0 my-5">
        <div className="container py-5 pb-lg-0">
            <div className="mx-auto text-center mb-3 pb-2" style={{maxwidth : '500px'}}>
                <h6 className="text-uppercase text-secondary">Features</h6>
                <h1 className="display-5 text-white">Why Choose Us!!!</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-3">
                    <div className="text-white mb-5">
                        <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-seedling fs-4 text-white"></i>
                        </div>
                        <h4 className="text-white">100% Organic</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                    </div>
                    <div className="text-white">
                        <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-award fs-4 text-white"></i>
                        </div>
                        <h4 className="text-white">Award Winning</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="d-block bg-white h-100 text-center p-5 pb-lg-0">
                        <p>At et justo elitr amet sea at. Magna et sit vero at ipsum sit et dolores rebum. Magna sea eos sit dolor, ipsum amet no tempor ipsum eirmod lorem eirmod diam tempor dolor eos diam et et diam dolor ea. Clita est rebum amet dolore sit. Dolor stet dolor duo clita, vero dolor ipsum amet dolore magna lorem erat stet sed vero dolor</p>
                        <img className="img-fluid" src="assets/img/feature.png" alt=""/>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="text-white mb-5">
                        <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-tractor fs-4 text-white"></i>
                        </div>
                        <h4 className="text-white">Modern Farming</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                    </div>
                    <div className="text-white">
                        <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-phone-alt fs-4 text-white"></i>
                        </div>
                        <h4 className="text-white">24/7 Support</h4>
                        <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center mb-5" style={{maxwidth: '500px'}}>
                <h6 className="text-primary text-uppercase">Products</h6>
                <h1 className="display-5">Our Fresh & Organic Products</h1>
            </div>
            <div className="owl-carousel product-carousel px-5">
                <div className="pb-5">
                    <div className="product-item position-relative bg-white d-flex flex-column text-center">
                        <img className="img-fluid mb-4" src="assets/img/product-1.png" alt=""/>
                        <h6 className="mb-3">Organic Vegetable</h6>
                        <h5 className="text-primary mb-0">$19.00</h5>
                        <div className="btn-action d-flex justify-content-center">
                           <Link to ="/" className="btn bg-primary py-2 px-3"><i className="bi bi-cart text-white"></i></Link>
                           <Link to ="/" className="btn bg-secondary py-2 px-3"><i className="bi bi-eye text-white"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="pb-5">
                    <div className="product-item position-relative bg-white d-flex flex-column text-center">
                        <img className="img-fluid mb-4" src="assets/img/product-2.png" alt=""/>
                        <h6 className="mb-3">Organic Vegetable</h6>
                        <h5 className="text-primary mb-0">$19.00</h5>
                        <div className="btn-action d-flex justify-content-center">
                           <Link to ="/" className="btn bg-primary py-2 px-3"><i className="bi bi-cart text-white"></i></Link>
                           <Link to ="/" className="btn bg-secondary py-2 px-3"><i className="bi bi-eye text-white"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="pb-5">
                    <div className="product-item position-relative bg-white d-flex flex-column text-center">
                        <img className="img-fluid mb-4" src="assets/img/product-1.png" alt=""/>
                        <h6 className="mb-3">Organic Vegetable</h6>
                        <h5 className="text-primary mb-0">$19.00</h5>
                        <div className="btn-action d-flex justify-content-center">
                           <Link to ="/" className="btn bg-primary py-2 px-3"><i className="bi bi-cart text-white"></i></Link>
                           <Link to ="/" className="btn bg-secondary py-2 px-3"><i className="bi bi-eye text-white"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="pb-5">
                    <div className="product-item position-relative bg-white d-flex flex-column text-center">
                        <img className="img-fluid mb-4" src="assets/img/product-2.png" alt=""/>
                        <h6 className="mb-3">Organic Vegetable</h6>
                        <h5 className="text-primary mb-0">$19.00</h5>
                        <div className="btn-action d-flex justify-content-center">
                           <Link to ="/" className="btn bg-primary py-2 px-3"><i className="bi bi-cart text-white"></i></Link>
                           <Link to ="/" className="btn bg-secondary py-2 px-3"><i className="bi bi-eye text-white"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="pb-5">
                    <div className="product-item position-relative bg-white d-flex flex-column text-center">
                        <img className="img-fluid mb-4" src="assets/img/product-1.png" alt=""/>
                        <h6 className="mb-3">Organic Vegetable</h6>
                        <h5 className="text-primary mb-0">$19.00</h5>
                        <div className="btn-action d-flex justify-content-center">
                           <Link to ="/" className="btn bg-primary py-2 px-3"><i className="bi bi-cart text-white"></i></Link>
                           <Link to ="/" className="btn bg-secondary py-2 px-3"><i className="bi bi-eye text-white"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <Testimonial/>
    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center mb-5" style={{maxwidth: '500px'}}>
                <h6 className="text-primary text-uppercase">The Team</h6>
                <h1 className="display-5">We Are Professional Organic Farmers</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <div className="row g-0">
                        <div className="col-10">
                            <div className="position-relative">
                                <img className="img-fluid w-100" src="assets/img/team-1.jpg" alt=""/>
                                <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4" >
                                    <h4 className="text-white">Farmer Name</h4>
                                    <span className="text-white">Designation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                               <Link to ="/" className="btn btn-square rounded-circle bg-white"><i className="fab fa-twitter text-secondary"></i></Link>
                               <Link to ="/" className="btn btn-square rounded-circle bg-white"><i className="fab fa-facebook-f text-secondary"></i></Link>
                               <Link to ="/" className="btn btn-square rounded-circle bg-white"><i className="fab fa-linkedin-in text-secondary"></i></Link>
                               <Link to ="/" className="btn btn-square rounded-circle bg-white"><i className="fab fa-instagram text-secondary"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="row g-0">
                        <div className="col-10">
                            <div className="position-relative">
                                <img className="img-fluid w-100" src="assets/img/team-2.jpg" alt=""/>
                                <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4" >
                                    <h4 className="text-white">Farmer Name</h4>
                                    <span className="text-white">Designation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                               <Link to ="/" className="btn btn-square rounded-circle bg-white"><i className="fab fa-twitter text-secondary"></i></Link>
                               <Link to ="/" className="btn btn-square rounded-circle bg-white"><i className="fab fa-facebook-f text-secondary"></i></Link>
                               <Link to ="/" className="btn btn-square rounded-circle bg-white"><i className="fab fa-linkedin-in text-secondary"></i></Link>
                               <Link to ="/" className="btn btn-square rounded-circle bg-white"><i className="fab fa-instagram text-secondary"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="row g-0">
                        <div className="col-10">
                            <div className="position-relative">
                                <img className="img-fluid w-100" src="assets/img/team-3.jpg" alt=""/>
                                <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4">
                                    <h4 className="text-white">Farmer Name</h4>
                                    <span className="text-white">Designation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                               <Link to ="/" className="btn btn-square rounded-circle bg-white"><i className="fab fa-twitter text-secondary"></i></Link>
                               <Link to ="/" className="btn btn-square rounded-circle bg-white"><i className="fab fa-facebook-f text-secondary"></i></Link>
                               <Link to ="/" className="btn btn-square rounded-circle bg-white"><i className="fab fa-linkedin-in text-secondary"></i></Link>
                               <Link to ="/" className="btn btn-square rounded-circle bg-white"><i className="fab fa-instagram text-secondary"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center mb-5" style={{maxwidth: '500px'}}>
                <h6 className="text-primary text-uppercase">Our Blog</h6>
                <h1 className="display-5">Latest Articles From Our Blog Post</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4">
                    <div className="blog-item position-relative overflow-hidden">
                        <img className="img-fluid" src="assets/img/blog-1.jpg" alt=""/>
                       <Link to ="/" className="blog-overlay">
                            <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                            <span className="text-white fw-bold">Jan 01, 2050</span>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="blog-item position-relative overflow-hidden">
                        <img className="img-fluid" src="assets/img/blog-2.jpg" alt=""/>
                       <Link to ="/" className="blog-overlay">
                            <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                            <span className="text-white fw-bold">Jan 01, 2050</span>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="blog-item position-relative overflow-hidden">
                        <img className="img-fluid" src="assets/img/blog-3.jpg" alt=""/>
                       <Link to ="/" className="blog-overlay">
                            <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                            <span className="text-white fw-bold">Jan 01, 2050</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
    );
}

const Home=()=>{
    return(<>
        <Extend />
        </>
    
    );
    
}

export default Home;