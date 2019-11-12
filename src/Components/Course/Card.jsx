import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="single-course mb20">
                    <img src={this.props.datacourse.image} alt="Image can't load"/>
                    <div class="course-details padding30">
                        <h3 class="font18">{this.props.datacourse.name}</h3>
                        <p>{this.props.datacourse.description}</p>
                        <p class="mt30"><a href="#" class="enroll-button">Enroll the Courses</a> <span class="course-price">${this.props.datacourse.price}</span></p>
                    </div>
                </div>
            </div>
        )
    }
}
