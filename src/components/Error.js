import React from 'react';

class Error extends React.Component {


	render() {

		return (
			<div className="main-container error-container">
				<p>Ne pare rău, dar această pagină nu&nbsp;există!</p>
				<h2>404</h2>
				<p>Poți accesa una dintre opțiunile de mai&nbsp;jos:</p>
				<div className="error-options">
					<a class="global-cta" href="/">Acasă</a>
					<a class="global-cta" href="/contact">Contact</a>
				</div>
			</div>
		);
	}
}


export default Error;