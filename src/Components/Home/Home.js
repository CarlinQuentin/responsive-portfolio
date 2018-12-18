import React, { Component } from 'react';
import './Home.css';

class Home extends Component{
    render(){
        return(
            <div>
                <link href="https://fonts.googleapis.com/css?family=Courgette" rel="stylesheet" />
                <div className='name'>Quentin Carlin</div>
                <div className='title'> Jr Software Developer</div><br/>
                <div className='quote'> "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - Patrick McKenzie</div>
            </div>
        )
    }
}

export default Home;