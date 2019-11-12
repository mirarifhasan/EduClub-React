import React, { Component } from 'react'
import {FeatureFaq} from '../../Data/FeatureFaq'
import Heading from './Heading'
import Details from './Details'

export default class Faq extends Component {
    render() {
        return (
            <section class="faqs-area padding-100-50" id="faqs">
                <div class="container">
                    <Heading />
                    <div class="row">
                        {
                            FeatureFaq.map((faq) =>
                                <Details faq = {faq}/>
                            )
                        }
                    </div>
                </div>
            </section>
        )
    }
}
