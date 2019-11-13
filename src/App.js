import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './Components/Header/Header'
import Feature from './Components/Feature/Feature'
import Footer from './Components/Footer/Footer'
import Course from './Components/Course/Course'
import About from './Components/About/About'
import Testimonial from './Components/Testimonial/Testimonial'
import Faq from './Components/FAQ/Faq'
import Contact from './Components/Contact/Contact'

const Home = (props) => {
    return(
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

const Courses = (props) => {
    return(
        <div>
            <Header />
            <h1>Hi, this is "Courses" page. URL value: {props.match.params.name}</h1>
            <Footer />
        </div>
    )
}

const Login = (props) => {
    return(
        <div>
            <Header />
            <h1>Hi, this is "Login" page.</h1>
            <Footer />
        </div>
    )
}

const Signup = (props) => {
    return(
        <div>
            <Header />
            <h1>Hi, this is "Signup" page.</h1>
            <Footer />
        </div>
    )
}

export default class App extends Component {
    render() {
        return ( 
            <BrowserRouter>
                <div>
                    <Route exact path="/" component = {Home} />
                    <Route exact path="/courses/:name" component = {Courses} />
                    <Route exact path="/login" component = {Login} />
                    <Route exact path="/signup" component = {Signup} />
                </div>
            </BrowserRouter>
        )
    }
}