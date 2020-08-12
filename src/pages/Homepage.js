import React from 'react';
import Hero from '../components/images/hero-img.png';
import Rama from '../components/images/rama.png';
import Crown from '../components/images/crown-icon.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from '../components/Slider';
import {Helmet} from 'react-helmet';
import Video2 from './images/crown-video.mp4';

class Homepage extends React.Component {

	render() {

		return (
			<React.Fragment>

			<Helmet>
				<title>Estetica Dentara | www.medical-crown.com | Municipiul București</title>
				<meta name="description" content="Estetica dentara, Implantologie, Parodontologie" />
			</Helmet>

				<div className='home'>
					<div className='hero'>
						<img src={Hero} alt='hero'/>
						<div className='hero-text'>
							<p>Sănătatea ta începe&nbsp;cu&nbsp;noi</p>
						</div>
					</div>
					<div className='main-container'>
						<div className="motto">
							<div className="motto-item prezentare">
								<div className="crown-title">
									<img src={Crown} alt='crown'/>
								</div>
								<p>Filozofia noastră este simplă și neschimbată de peste 20 de ani de activitate:</p>
								<ul>
									<li>
										<i className='fas'>&#xf101;</i>suntem devotatiorientati către nevoile
										pacienților noștri astfel încât aceștia să se bucure de toate beneficiile pe
										care le putem oferi
									</li>
									<li>
										<i className='fas'>&#xf101;</i>suntem dedicați în totalitate și facem totul
										ghidați de pasiunea care ne reprezintă</li>
									<li>
										<i className='fas'>&#xf101;</i>folosind cele mai bune materiale și aparatură
										ultra modernă facem posibile rezultate excelente</li>
									<li>
										<i className='fas'>&#xf101;</i>echipa noastră este alcătuită numai din
										profesioniști cu o vastă experiență medicală</li>
									<li>
										<i className='fas'>&#xf101;</i>un ambient pozitiv și primitor</li>
									<li>
										<i className='fas'>&#xf101;</i>punem la dispoziția pacienților noștri cele mai
										bune și adecvate soluții astfel încât alegerile lor să fie cele mai mulțumitoare</li>
									<li>
										<i className='fas'>&#xf101;</i>realizăm planuri de tratament personalizate
										făcând posibilă o abordare a tuturor pacienților din toate segmentele de piață</li>
								</ul>
							</div>
							<div className='motto-item rama-box'>
								<img src={Rama} alt='rama'/>
							</div>
						</div>

					</div>
					<div className="filosofy">
						<div className="main-container">
							<h2>"Omnium Artium Medicina Nobilissima Est"<br/>
									~ Aristotel ~</h2>
							<p>Fiecare om are dreptul și merită un tratament medical de cea mai bună
							calitate iar noi ne asumăm rolul de partener de încredere în această minunată
							excursie a zâmbetului.</p>
						</div>
					</div>
					<Slider/>
					<div className="filosofy">
						<div className="main-container filosofy-video">
							<div className="video-box"><video className='video-home' controls poster='./images/aparat2.png' src={Video2} type="video/mp4"></video></div>
							<div className="text">
								<h2>Descoperă tehnologia progresivă</h2>
								<p>Specialiștii noștri au integrat cu succes tratamentul laser în toate tipurile de tratament stomatologic, de la
								parodontologie, implantologie, estetică dentară și tehnici ultra moderne de&nbsp;fațetare.</p>
							</div>
						</div>
					</div>
					<div className="program">
						<div className="main-container">
							<h2>PROGRAM</h2>
							<ul>
								<li>
									<i className='fas'>&#xf101;</i>
									<p>Lun - Vin : 09 - 20</p>
								</li>
								<li>
									<i className='fas'>&#xf101;</i>
									<p>Sâmbăta : 10 - 16</p>
								</li>
								<li>
									<i className='fas'>&#xf101;</i>
									<p>Duminica: 10 - 14</p>
								</li>
							</ul>
							<h2>ADRESĂ</h2>
							<ul>
								<li>
									<i className='fas'>&#xf101;</i>
									<p>str. Petre Ispirescu, nr. 89-91</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Homepage;
