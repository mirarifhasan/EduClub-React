import React, { Component } from 'react'
import Tag from './Tag'
import Content from './Content'
import Count from './Count'

export default class Feature extends Component {
    render() {
        return (
            <div>
                <Tag />
                <Content />
                <Count />
            </div>
        )
    }
}
