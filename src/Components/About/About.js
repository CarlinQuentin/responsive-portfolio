import React, { Component } from 'react';
import './About.css';
import img from '../assets/Quentin.jpeg';

class About extends Component{
    render(){
        return(
            <div>
                <h1>About Me</h1>
                    <link href="https://fonts.googleapis.com/css?family=Courgette" rel="stylesheet" />
                        <div className='grid'> 
                            <div><img className='img' src={img} /></div>
                            <p className='me'>My name is Quentin Carlin. I have been learning to code for the last few months. I enjoy active sports such as tennis, soccer, frisbee, or boxing. I was home-schooled along with my nine siblings which has taught me so much through the years (especially how to get along with people). After graduating highschool I wanted to enhance my coding abilities. I just graduated Eleven-Fifty Academy in November and have continued to imporve my full stack coding skills. Coding isn't just numbers, letters and special characters on a screen. It is a way of thinking, a lifestyle. I honestly love to code, and look forward to wherever it takes me!<br/>
                            <a href='https://docs.google.com/document/d/19blXJXNu0Uafh0GZ6TFCQDcw_noh8FayzWCabT7ZiO0/edit?usp=sharing' target='blank'>Resume</a>
                            </p> 
                        </div>
            </div>
        )
    }
}

export default About;