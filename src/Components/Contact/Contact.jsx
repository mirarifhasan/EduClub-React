import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <section class="contact-area sky-gray-bg" id="contact">
                <div class="container-fluid no-padding">
                    <div class="row no-margin">
                        <div class="no-padding col-md-6 col-lg-6 col-sm-12 col-xs-12">
                            <div class="map-area relative">
                                <iframe src="https:www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.480169482631!2d90.41143640041516!3d23.76590981376544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c781d48a83b7%3A0xab174342e0b0f6b5!2sHatir%20Jheel%20Link%20Rd%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1573544582665!5m2!1sen!2sbd" style={{width: "100%", height: "600px"}}></iframe>
                            </div>
                        </div>
                        <div class="no-padding col-md-5 col-lg-5 col-sm-12 col-xs-12">
                            <div class="contact-form-content padding50 xs-padding20">
                                <div class="contact-title wow fadeIn">
                                    <h3 class="font28 mb50 xs-mb30 xs-font22 xs-mt20">Any question in mind? Don’t Worry Contact Us.</h3>
                                </div>
                                <div class="contact-form wow fadeIn">
                                    <form action="process.php" id="contact-form" method="post">
                                        <div class="row">
                                            <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                                <div class="form-group" id="name-field">
                                                    <div class="form-input">
                                                        <input type="text" class="form-control" id="form-name" name="form-name" placeholder="Name.." required/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                                <div class="form-group" id="email-field">
                                                    <div class="form-input">
                                                        <input type="email" class="form-control" id="form-email" name="form-email" placeholder="Email.." required/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                <div class="form-group" id="phone-field">
                                                    <div class="form-input">
                                                        <input type="text" class="form-control" id="form-phone" name="form-phone" placeholder="Subject.."/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                <div class="form-group" id="message-field">
                                                    <div class="form-input">
                                                        <textarea class="form-control" rows="6" id="form-message" name="form-message" placeholder="Your Message Here..." required></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                <div class="form-group mb0">
                                                    <button type="submit">Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
