import React, { Component } from 'react'

export default class Count extends Component {
    render() {
        return (
            <section class="fun-fact-area center white relative padding-100-70" id="fact">
                <div class="area-bg" data-stellar-background-ratio="0.6"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-6 col-xs-12">
                            <div class="single-fun-fact mb30 wow fadeInUp" data-wow-delay="0.1s">
                                <h3 class="font60 xs-font26"><span class="counter">20</span>k</h3>
                                <p class="font600">Graduated Students</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 col-xs-12">
                            <div class="single-fun-fact mb30 wow fadeInUp" data-wow-delay="0.2s">
                                <h3 class="font60 xs-font26"><span class="counter">124</span></h3>
                                <p class="font600">Expert Instructors</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 col-xs-12">
                            <div class="single-fun-fact mb30 wow fadeInUp" data-wow-delay="0.3s">
                                <h3 class="font60 xs-font26"><span class="counter">600</span>k</h3>
                                <p class="font600">Books in our library</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 col-xs-12">
                            <div class="single-fun-fact mb30 wow fadeInUp" data-wow-delay="0.4s">
                                <h3 class="font60 xs-font26"><span class="counter">15</span>k</h3>
                                <p class="font600">Students get employed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
