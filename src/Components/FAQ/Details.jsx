import React, { Component } from 'react'

export default class Details extends Component {
    render() {
        return (
            <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                <div class="text-icon-box relative mb50 wow fadeInUp" data-wow-delay="0.1s">
                    <h3 class="box-title">{this.props.faq.ques}</h3>
                    <p>{this.props.faq.soln}</p>
                </div>
            </div>
        )
    }
}
