import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component{
    render(){
        return(
            <div>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css?family=Courgette" rel="stylesheet" />
                <div className='thisstuff'>
                <form action="https://formspree.io/quentinbcarlin@gmail.com" method="POST" className="contact">
              <div className="control-group">
                <div className="form-group another">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    id="name"
                    required
                    data-validation-required-message="Please enter your name"
                    name="name"
                    />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    id="email"
                    required
                    data-validation-required-message="Please enter your email here"
                    name="_replyto"
                    />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
                <div className="form-group thisthing">
                  <textarea
                    className="form-control messages"
                    rows="7"
                    placeholder="Your Message"
                    id="message"
                    required
                    data-validation-required-message="Please leave a message"
                    name="message"
                  ></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              <div className="text-center">
                <div id="success"></div>
                <button type="submit" className="btn btn-lg btn-black">
                  <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                  Send Message
                </button>
              </div>
            </form>
                </div>
                <p className='cont'>Lets Get in Touch!</p>
                <div className='icons'>
                    <a class="fab fa-linkedin link" href='https://www.linkedin.com/in/quentin-carlin-b4111a16a/' target='_blank'></a>
                    <a class="fab fa-github-square git link" href='https://github.com/CarlinQuentin' target='_blank'></a>
                </div>
            </div>
        )
    }
}

export default Contact;