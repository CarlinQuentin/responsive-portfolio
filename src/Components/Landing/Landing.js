import React from 'react';
import './Landing.css';
import { Route, Link, Switch } from 'react-router-dom';

import Home from '../Home/Home'
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Landing = () => (
    <div className='navbar'>
        <div className='navbar-list-styling'>
            <div className='navbar-list list-unstyled'>
                <p className='listen'><Link to='/'>Home</Link></p>
                <p className='listen'><Link to='/about'>About</Link></p>
                <p className='listen'><Link to='/projects'>Projects</Link></p>
                <p className='listen'><Link to='/contact'>Contact</Link></p>
            </div>
        </div>
        <div>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/about"><About /></Route>
                <Route exact path="/projects"><Projects /></Route>
                <Route exact path="/contact"><Contact /></Route>
            </Switch>
        </div>
    </div>
)
export default Landing;