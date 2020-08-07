import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SliderOffers from '../components/SliderOffers';
import {Helmet} from 'react-helmet';



class Oferte extends React.Component {


	render() {
							// for gatsby images: https://www.youtube.com/watch?v=M8ZDDbEGrBA
		return (
			<React.Fragment>

			<Helmet>
				<title>Oferte | Crown Medical Center</title>
				<meta name="description" content="Estetica dentara, Implantologie, Parodontologie" />
			</Helmet>

				<div className='oferte'>
					<div className="carousel-box">
						<div className="main-container">
						<SliderOffers />
						</div>
					</div>
					<div className='main-container'>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Oferte;
