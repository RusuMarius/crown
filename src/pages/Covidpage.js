import React from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

class Covidpage extends React.Component {
	render() {
		return (
			<div>
				<Helmet>
					<title>Informare Covid 19 | Crown Medical Center</title>
					<meta name="description" content="Estetica dentara, Implantologie, Parodontologie" />
				</Helmet>
				<div className='main-container'>
					<Link className='global-cta' to="/">Revino la pagina principală</Link><br /><br />
					<p className='paragraph-green'>Protocoalele noastre de igienizare, control al infecțiilor și măsurile de distanțare socială includ următoarele:</p>

					<ul>
						<li><i className='fas'>&#xf101;</i>Verificarea temperaturii corpului la intrarea in clinica</li>
						<li><i className='fas'>&#xf101;</i>echiparea si dezinfectia</li>
						<li><i className='fas'>&#xf101;</i>solicitarea tuturor pacienților să completeze toate documentele necesare COVID-19  la intrarea in clinica,</li>
						<li><i className='fas'>&#xf101;</i>solicitarea oricărei persoane care intră în cabinet să poarte o mască facială și să se asigure că sunt la o distanță de cel puțin 1,5 m atunci când nu primesc tratament dentar</li>
						<li><i className='fas'>&#xf101;</i>instruirea pacienților să se clătească apa de gura înainte de tratamentele dentare</li>
						<li><i className='fas'>&#xf101;</i>solicitarea medicilor și a personalului medical să poarte în permanență echipament de protecție individuală adecvat</li>
						<li><i className='fas'>&#xf101;</i>curățam temeinic și regulat toate suprafețele din clinica care pot fi expuse la infecții între pacienți</li>
						<li><i className='fas'>&#xf101;</i>solicitarea pacienților simptomatici să reprogrameze programările la date ulterioare</li>
					</ul>

				</div>
			</div>
		);
	}
}

export default Covidpage;
