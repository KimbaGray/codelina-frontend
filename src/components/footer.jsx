import React, { Component } from 'react';

class Footer extends Component {
	state = {};
	render() {
		return (
			<div className="footer">
				<ul>
					<li>
						<a href="https://www.instagram.com/carolvelosos/">
							<i className="fab fa-instagram socialMedia" />
						</a>
					</li>
					<li>
						<a href="mailto:carolina@brazilianglow.co.uk?subject=Hey%20Carolina,%20I%20have%20a%20question...">
							<i className="far fa-envelope socialMedia" />
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Footer;
