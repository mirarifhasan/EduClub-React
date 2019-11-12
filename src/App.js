import React, { Component } from 'react'
import Header from './Components/Header/Header'
import Feature from './Components/Feature/Feature'
import Footer from './Components/Footer/Footer'
import Course from './Components/Course/Course'
import About from './Components/About/About'
import Testimonial from './Components/Testimonial/Testimonial'
import Faq from './Components/FAQ/Faq'
import Contact from './Components/Contact/Contact'


export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Feature />
                <Course />
                <About />
                <Testimonial />
                <Faq />
                <Contact />

                <Footer />
            </div>
        )
    }
}
