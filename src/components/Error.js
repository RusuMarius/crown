import React from 'react';

class Error extends React.Component {


	render() {

		return (
			<div className="main-container error-container">
				<p>Ne pare rau, dar aceasta pagina nu&nbsp;exista!</p>
				<h2>404</h2>
				<p>Poti accesa una dintre optiunile de mai&nbsp;jos:</p>
				<div className="error-options">
					<a class="global-cta" href="/">Acasa</a>
					<a class="global-cta" href="/contact">Contact</a>
				</div>
			</div>
		);
	}
}


export default Error;