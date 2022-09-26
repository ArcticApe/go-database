import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Carousel.css"


const Carousel = () => {
  return (
    <div>
        <div className='Carousel-items' style={{ margin: "50px"}}>
            <Slider>
                <div>
                    <img src="./photos/photo1.jpg" alt='' style={{ width: "100%", height: "80vh"}}/>
                </div>
                <div>
                    <img src="./photos/photo2.jpg" alt='' style={{ width: "100%", height: "80vh"}}/>
                </div>
                <div>
                    <img src="./photos/photo3.jpg" alt='' style={{ width: "100%", height: "80vh"}}/>
                </div>
                <div>
                    <img src="./photos/photo4.jpg" alt='' style={{ width: "100%", height: "80vh"}}/>
                </div>
                <div>
                    <img src="./photos/photo5.jpg" alt='' style={{ width: "100%", height: "80vh"}}/>
                </div>
                <div>
                    <img src="./photos/photo6.jpg" alt='' style={{ width: "100%", height: "80vh"}}/>
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default Carousel;