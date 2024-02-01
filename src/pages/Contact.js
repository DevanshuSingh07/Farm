 import { Link } from "react-router-dom";
 import Footer from '../components/Footer';
 import Form from "../components/Form";
const Contact=()=>{
    return(
        <>
         <div className="container-fluid bg-primary py-5 bg-hero mb-5">
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className="display-1 text-white mb-md-4">Contact Us</h1>
                    <Link to="/" className="btn btn-primary py-md-3 px-md-5 me-3">Home</Link>
                    <Link to="/" className="btn btn-secondary py-md-3 px-md-5">Contact Us</Link>
                </div>
            </div>
        </div>
    </div>

        <Form/>
        <Footer/>
        </>
    );
}

export default Contact;