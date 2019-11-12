import React, { Component } from 'react'
import Slider from './Slider'

export default class Header extends Component {
    render() {
        return (
            <header class="top-area" id="home">
                <div class="header-top-area" id="scroolup">
                    <div class="mainmenu-area" id="mainmenu-area">
                        <div class="mainmenu-area-bg"></div>
                        <nav class="navbar">
                            <div class="container">
                                <div class="navbar-header">
                                    <a href="#home" class="navbar-brand"><img src="assest/img/logo.png" alt="logo"/></a>
                                </div>
                                <div id="main-nav" class="stellarnav">
                                    <ul id="nav" class="nav navbar-nav pull-right">
                                        <li class="active"><a href="#home">Home</a></li>
                                        <li><a href="#features">Features</a></li>
                                        <li><a href="#courses">Courses</a></li>
                                        <li><a href="#testmonial">Testmonial</a></li>
                                        <li><a href="#blog">Blog</a></li>
                                        <li><a href="#faqs">Faqs</a></li>
                                        <li><a href="#contact">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                <Slider />
            </header>
        )
    }
}
