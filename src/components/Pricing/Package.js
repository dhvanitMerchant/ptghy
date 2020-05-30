import React from 'react';
import SinglePackage from './SinglePackage'

class Package extends React.Component {

  
    render() {

   
        const packages = [
            {
                packageName: 'Package 1',
                isAvaialable: true,
                days: 3,
                services: [
                    {
                        service: 'One Photographer '
                    }, {
                        service: 'One Cinematographer '
                    }, {
                        service: 'Highlight Up To 2-3 Min.'
                    }, {
                        service: 'Up to One Hour Short Film'
                    }, {
                        service: 'Calendar/Mini Book '
                    }, {
                        service: 'One Album Of 250-275 Selected Photos'

                    }, {
                        service: 'All Photos in Softcopy'
                    }
                ],
                price: '30,000'
            }, {
                packageName: 'Package 2',
                isAvaialable: true,
                days: 3,
                services: [
                    {
                        service: 'One Photographer '
                    }, {
                        service: 'One Cinematographer '
                    }, {
                        service: 'Highlight Up To 2-3 Min.'
                    }, {
                        service: 'Up to One Hour Short Film'
                    }, {
                        service: 'Calendar/Mini Book '
                    }, {
                        service: 'One Album Of 250-275 Selected Photos'

                    }, {
                        service: 'All Photos in Softcopy'
                    }
                ],
                price: '30,000'
            }
        ];


        return (
            <div className="packageList">
                {packages.map((singlePackage, index) => {
                    return (
                        <div key={index}>
                            <SinglePackage  singlePackage={singlePackage} />
                            
                        </div>
                    )
                })
}

            </div>

        );
    }

}
export default Package;