import React from 'react';
import packages from './packageContent'
import SinglePackageService from './SinglePackageService';

class Package extends React.Component {
	render() {
		return (
			<section id="pricing">
				<div className="text-center">
					<h2 className="margin-top-0 text-light headers">
						<i className="fas fa-caret-left"></i>&nbsp; What We Offer? &nbsp;<i className="fas fa-caret-right"></i>
					</h2>
					<hr className="light"/>
				</div>
				<div className="container">
					<div className="row no-gutter">
						{packages.map((singlePackage, index) => {
							return (
								<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
									<div class="hovereffect">
										<img class="img-responsive" src={singlePackage.imgUrl} alt="" />
										<div class="overlay">
											<h2>{singlePackage.packageName}</h2>
											<p className="text-center small">Days: {singlePackage.days}<br />
											Price: {singlePackage.price} -/</p>
											<ul>
												{singlePackage.services.map((singlePackageService, i) => {
													return (<SinglePackageService singlePackageService={singlePackageService}/>)
												})}
											</ul>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</section>
		);
	}
};


export default Package;
