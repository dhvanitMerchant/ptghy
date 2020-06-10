/* eslint-disable strict */
/* eslint-disable no-undef */
import React, {Component} from 'react'
import ScrollUpButton from "react-scroll-up-button";
import '../../components/App.css';
import '../../components/App.css';
import '../../components/App.scss';

import About from '../About/About';
import Package from '../Pricing/Package';
import Contact from '../Contact/Contact';
import Footer from './Footer';
import Header from './Header';
import Gallaries from '../Gallaries/Gallaries';
import videoBack from '../images/videoBack2.gif'

const Loading = () => <div className="loading" delay-hide="000">

    <div className="load-text">
        <img className='img-responsive' alt='logo' src={videoBack}/>
    </div>

</div>
export class Home extends Component {
    render() {
        return (
            <div>
                <Loading/>
                <Header/>
                <About/>
                <Gallaries/>
                <Package/>
                <Contact/>
                <ScrollUpButton style={{
                    padding: '5px'
                }}/>
                <Footer/>
            </div>
        )
    }

    componentDidMount() {

        $(document)
            .ready(function () {
                var loading = $(".loading");
                loading
                    .delay(loading.attr("delay-hide"))
                    .slideUp();
            });

        (function ($) {
            $('.js-nav Link')
                .click(function (e) {
                    e.preventDefault();
                    $('body, html').animate({
                        scrollTop: $($.attr(this, 'to'))
                            .offset()
                            .top
                    }, 750);
                });
          

            $('body').scrollspy({target: '.navbar-fixed-top', offset: 60});

            $('#topNav').affix({
                offset: {
                    top: 200
                }
            });

            $('#drop').affix({
                offset: {
                    top: 200
                }
            });
            new WOW().init();

            $('a.page-scroll').bind('click', function (event) {
                var $ele = $(this);
                $('html, body')
                    .stop()
                    .animate({
                        scrollTop: ($($ele.attr('href')).offset().top - 60)
                    }, 1450, 'none');
                event.preventDefault();
            });

            $('.navbar-collapse ul li a').click(function () {
                /* always close responsive nav after click */
                $('.navbar-toggle:visible').click();
            });

            $('#galleryModal').on('show.bs.modal', function (e) {
                $('#galleryImage').attr("src", $(e.relatedTarget).data("src"));
            });

        })(jQuery);

    }

}

export default Home
