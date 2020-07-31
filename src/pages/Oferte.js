import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SliderOffers from '../components/SliderOffers';



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
                    <SliderOffers />

                    </div>
                </div>
                <div className='main-container'>

                </div>
            </div>
        );
    }
}

export default Oferte;
