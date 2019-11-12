import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div class="single-testmonial m20">
                <div class="author-content mb20">
                    <p>{this.props.testimonial.text}</p>
                </div>
                <div class="author-name-image relative">
                    <div class="author-img mb20">
                        <img src={this.props.testimonial.image} alt=""/>
                    </div>
                    <h4>{this.props.testimonial.name}</h4>
                    <a href="#">{this.props.testimonial.userType}</a>
                </div>
            </div>
        )
    }
}
