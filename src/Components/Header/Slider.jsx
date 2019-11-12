import React, { Component } from 'react'

export default class Slider extends Component {
    render() {
        return (
            <div class="welcome-slider-area white font16">
                <div class="welcome-single-slide">
                    <div class="slide-bg-one slide-bg-overlay"></div>
                    <div class="welcome-area">
                        <div class="container">
                            <div class="row flex-v-center">
                                <div class="col-md-8 col-lg-7 col-sm-12 col-xs-12">
                                    <div class="welcome-text">
                                        <h1>Develop a passion for learning new things.</h1>
                                        <p>Was certainty remaining engrossed applauded sir how discovery. Settled opinion how enjoyed greater joy adapted too shy. Now properly surprise expenses.</p>
                                        <div class="home-button">
                                            <form action="#">
                                                <input type="search" name="search" id="search" placeholder="Search Courses"/>
                                                <button type="submit"><i class="fa fa-search"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
