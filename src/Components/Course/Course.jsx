import React, { Component } from 'react'
import Heading from './Heading'
import Cards from './Cards'

export default class Course extends Component {
    render() {
        return (
            <section class="course-area padding-top" id="courses">
                <div class="container-fluid">
                    <Heading />
                    <Cards />
                </div>
            </section>
        )
    }
}
