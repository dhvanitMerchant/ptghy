import React from 'react';
import SinglePackageService from './SinglePackageService';

function singlePackage({singlePackage}) {
    const days = {
        fontSize: '2rem'
    }
    const service = {
        fontSize: '1rem'

    }
    return (

        <section id="packages">
            <div class="container">
                <div class="singlePackage">
                    <h1>{singlePackage.packageName}</h1>
                    <div style={days} className="desc">
                        Days: {singlePackage.days}

                        &nbsp; 

                        Rs {singlePackage.price}
                        /-
                    </div>
                    <div style={service} className="services">
                        {singlePackage
                            .services
                            .map((singlePackageService, i) => {
                                return (<SinglePackageService singlePackageService={singlePackageService}/>)
                            })
}
                    </div>

                </div>
            </div>
        </section>
    )
}
export default singlePackage;