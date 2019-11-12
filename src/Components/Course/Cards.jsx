import React, { Component } from 'react'
import {DataCourse} from '../../Data/FeatureCourse'
import Card from './Card'

export default class Cards extends Component {
    render() {
        return (
            <div class="row course-list">
                {
                    DataCourse.map((datacourse) => (
                        <Card datacourse = {datacourse} />
                    ))
                }
            </div>
        )
    }
}
