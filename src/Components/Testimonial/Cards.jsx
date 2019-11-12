import React, { Component } from 'react'
import {FeatureTestimonial} from '../../Data/FeatureTestimonial'
import Card from './Card'

export default class Cards extends Component {
    render() {
        return (
            <div class="row">
                <div class="col-md-12">
                    <div class="testmonial-slider displayflex">
                        {
                            FeatureTestimonial.map((testimonial) =>
                                <Card testimonial={testimonial}/>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}
