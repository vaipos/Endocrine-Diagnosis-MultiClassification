import React from 'react';

function Treatment() {
	var disorder = 'DISORDER';
	return (
		<section id="treatments" className="treatment-section">
			<div className="container">
					<p className="treatment-font"><b>Treatment for {disorder} </b></p>
					<div className="treatment-row">
						<div className="treatment-row-item">
							<p className="treatment-title"><b>Diagnosis</b></p>
						</div>
						<div className="treatment-row-item">
							<p className="treatment-description">insert text about diagnosis</p>
						</div>
					</div>
					<hr></hr>
					<div className="treatment-row">
						<div className="treatment-row-item">
							<p className="treatment-title"><b>Lifestyle</b></p>
						</div>
						<div className="treatment-row-item">
							<p className="treatment-description">insert text about lifestyle</p>
						</div>
					</div>
					<hr></hr>
					<div className="treatment-row">
						<div className="treatment-row-item">
							<p className="treatment-title"><b>Medications</b></p>
						</div>
						<div className="treatment-row-item">
							<p className="treatment-description">insert text about medications</p>
						</div>
					</div>
			</div>
		</section>
	);
}

export default Treatment;