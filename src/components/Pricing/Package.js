import React from 'react';
// import SinglePackage from './SinglePackage'
import packages from './packageContent'
import SinglePackageService from './SinglePackageService';

class Package extends React.Component {

    

    render() {
        const days = {
            fontSize: '2rem'
        }
        const service = {
            fontSize: '1rem'
    
        }

        return (
            <section id="pricing" className="bg-dark aside">
                <div className="col-lg-12 text-center wow slideInUp" data-wow-delay=".6s">
                    <h2 className="margin-top-0 text-light">What we have?</h2>
                    <hr className="light"/>
                </div>

         

                <div class="packageContainer ">
                    {packages.map((singlePackage, index) => {
                        return (
                            <div class="card">
                                 {/* <img alt = 'land' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/False_alarm_-a.jpg/1280px-False_alarm_-a.jpg"/> */}
                                <div class="conatiner">
                                    <h1>{singlePackage.packageName}</h1>
                                    <div style={days} className="desc">
                                        Days: {singlePackage.days}

                                        &nbsp; Rs {singlePackage.price}
                                        /-
                                    </div>
                                    <div style={service} className="services">
                                    <h3>Services</h3>
                                        
                                        {singlePackage
                                            .services
                                            .map((singlePackageService, i) => {
                                                return (<SinglePackageService singlePackageService={singlePackageService}/>)
                                            })
}
                                    <div class="card__head">{singlePackage.packageName}</div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}

                </div>

            </section>
        );
    }
}

export default Package;
