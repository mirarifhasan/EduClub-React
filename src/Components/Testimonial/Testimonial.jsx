import React, { Component } from 'react'
import Heading from './Heading'
import Cards from './Cards'

export default class Testimonial extends Component {
    render() {
        return (
            <section class="testmonial-area bg-theme section-padding" id="testmonial">
                <div class="container">
                    <Heading />
                    <Cards />
                    
                </div>
            </section>
        )
    }
}
