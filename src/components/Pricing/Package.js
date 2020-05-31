import React from 'react';
import SinglePackage from './SinglePackage'
import packages from './packageContent'

class Package extends React.Component {

    render() {

        return (
            <section id="pricing" className="bg-dark">
                {packages.map((singlePackage, index) => {
                    return (
                        <div key={index}>
                            <SinglePackage singlePackage={singlePackage}/>

                        </div>
                    )
                })
}

            </section>

        );
    }

}
export default Package;
