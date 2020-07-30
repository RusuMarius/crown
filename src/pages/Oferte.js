import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import img1 from './images/ofer2.png';
import img2 from './images/ofer1.png';
import img3 from './images/ofer3.png';



class Oferte extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
                // for gatsby images: https://www.youtube.com/watch?v=M8ZDDbEGrBA
        return (
            <div className='oferte'>
                <div className="carousel-box">
                    <div className="main-container">
                <Carousel>
                    <div className='slide-item'>
                        <img src={img1} alt="ss"/>
                        <div className="content content1">
                            <h2>Vino sa ne cunosti</h2>
                        </div>
                    </div>
                    <div className='slide-item'>
                        <img src={img2} alt=""/>
                        <div className="content content2">
                            <h2>Vino sa ne cunosti</h2>
                        </div>
                    </div>
                    <div className='slide-item'>
                        <img src={img3} alt=""/>
                        <div className="content content3">
                            <h2>Vino sa ne cunosti</h2>
                        </div>
                    </div>

                </Carousel>

                    </div>
                </div>
                <div className='main-container'>

                </div>
            </div>
        );
    }
}

export default Oferte;
