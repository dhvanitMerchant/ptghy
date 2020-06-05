import React from 'react';
import packages from './packageContent'
import SinglePackageService from './SinglePackageService';

class Package extends React.Component {
    render() {
        return (
            <section id="pricing">
                <div class="text-center">
                    <h2 className="margin-top-0 text-light headers">
                        <i class="fas fa-caret-left"></i>&nbsp; What We Offer? &nbsp;<i class="fas fa-caret-right"></i>
                    </h2>
                        <hr class="light"/>
                </div>
                <div class="container1">
                    {packages.map((singlePackage, index) => {
                        return (
                            <div class="card">
                                <div class="card__head">{singlePackage.packageName}</div>
                                <div class="package">
                                    <h1 class="text-center">{singlePackage.packageName}</h1>
                                    <p className="text-center">Days: {singlePackage.days}</p>
                                    <p>Price: {singlePackage.price} -/</p>
                                    <ul>
                                        {singlePackage.services.map((singlePackageService, i) => {
                                            return (<SinglePackageService singlePackageService={singlePackageService}/>)
                                        })}
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        );
    }
};


export default Package;
