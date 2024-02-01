import react from 'react';
import ReactOwlCarousel from 'react-owl-carousel';
// import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const OwlTest=()=>{
    return(
        <>
        <ReactOwlCarousel className='owl-theme' loop  items={2} >
            <div>
                <h1 style={{textAlign:'center'}}>1</h1>
            </div>
            <div>
                <h1>2</h1>
            </div>
            <div>
                <h1>3</h1>
            </div>
            <div>
                <h1>4</h1>
            </div>
            <div>
                <h1>5</h1>
            </div>
            <div>
                <h1>6</h1>
            </div>
        </ReactOwlCarousel>
        </>
    )
}
export default OwlTest;