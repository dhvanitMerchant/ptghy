import React from 'react';
import SinglePackage from './SinglePackage'

class Pricing extends React.Component {
    render() {
        var list = [
            {
                value: 'One',
                list: [
                    {
                        value: 'abc',
                        selected: false
                    }, {
                        value: 'efg',
                        selected: false
                    }
                ]
            }, {
                value: 'Two',
                list: [
                    {
                        value: 'psr',
                        selected: false
                    }
                ]
            }
        ];
        return <div className="widget">
            {list.map((item, index) => {
                return (
                    <div key={index}>
                        <ul >{item.value}</ul>
                        {item
                            .list
                            .map((subitem, i) => {
                                return (
                                    <ul >
                                        <li>{subitem.value}</li>
                                    </ul>
                                )
                            })
}
                    </div>
                )
            })
}

        </div>;
    }
}

export default Pricing;