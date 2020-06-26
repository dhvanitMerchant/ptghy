import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import images from './eventcontent'

class Event extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {
        const { photoIndex, isOpen } = this.state;

        return (
            <section id="event">
                <div className="text-center wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                    <h2 className="margin-top-0 text-light headers">
                        <i className="fas fa-caret-left"></i>&nbsp; Wedding &nbsp;<i className="fas fa-caret-right"></i>
                    </h2>
                    <hr className="light wow animate__animated animate__flash" data-wow-delay=".3s" />
                </div>
                <div className="container">
                    <button className="col-md-4 text-center thumbnail" type="button" onClick={() => this.setState({ isOpen: true })}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/photography-2404.appspot.com/o/wedding%2F033A2162.jpg?alt=media&token=8c341926-f4b9-4fe4-a919-f113a6e29a20" width='100%' height='300px' alt="" />
                    </button>
                    {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => this.setState({ isOpen: true })}
                            onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + images.length - 1) % images.length
                                })
                            }
                            onMoveNextRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + 1) % images.length
                                })
                            }
                        />
                    )}
                </div>
            </section>
        );
    }
}

export default Event;