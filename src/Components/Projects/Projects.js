import React, { Component } from 'react';
import './Projects.css';
import img1 from '../assets/imgs/css.png'
import img2 from '../assets/imgs/web2.png'
import img3 from '../assets/imgs/api.png'
import img4 from '../assets/imgs/Storylog.png'
import img5 from '../assets/imgs/foodFinder.png'
import img6 from '../assets/imgs/nightbuzz.png'

class Projects extends Component{
    constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
        isHovering: false
    }
}

handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }


    render(){
        return(
            <div>

                <p>Pojects</p>
                
                <div className='allofem'>
                    <a className='links' target='blank' href='https://codepen.io/QuentinCarlin/pen/aaNgEL'><img src={img1}/></a>

                    <a className='links' target='blank' href='https://carlinquentin.github.io/firstWebsite/'><img src={img2}/></a>

                    <a className='links' target='blank' href='https://carlinquentin.github.io/CarlinQuentin.github.io-api/'><img src={img3}/></a>

                    <a className='links' target='blank' href='https://storylog1-client.herokuapp.com/'><img src={img4}/></a>  
  
                    <a className='links' target='blank' href='https://food-finder123.herokuapp.com/'><img src={img5}/></a>  
 
                    <a className='links' target='blank' href='https://nightbuzz-plzzz-wurk.herokuapp.com/about'><img src={img6}/></a> 
                {/* <div className='allofem'>
                        <div className='grid-item'><a className='links' target='blank' href='https://codepen.io/QuentinCarlin/pen/aaNgEL'> CSS Creature<img src={img1}/></a>   Built after 1 day of coding <br/> Time to build: 1 day </div>
                        <div className='grid-item'><a className='links' target='blank' href='https://carlinquentin.github.io/firstWebsite/'> Static Store Front<img src={img2}/></a>  Built after 5 days of coding <br/> Time to build: 3 days </div>
                        <div className='grid-item'><a className='links' target='blank' href='https://carlinquentin.github.io/CarlinQuentin.github.io-api/'>Recipe Finder<img src={img3}/></a>  Built after 2 weeks of coding <br/> Time to build: 5 days </div>
                        <div className='grid-item'><a className='links' target='blank' href='https://storylog1-client.herokuapp.com/'> Story Log<img src={img4}/></a>  Built after 8 weeks of coding <br/> Time to build: 2 weeks</div>
                        <div className='grid-item'><a className='links' target='blank' href='https://food-finder123.herokuapp.com/'> Food Finder<img src={img5}/></a>  Built after 11 weeks of coding <br/> Time to build: 1 day</div>
                        <div className='grid-item'><a className='links' target='blank' href='https://nightbuzz-plzzz-wurk.herokuapp.com/about'> Night Buzz<img src={img6}/></a>  Built after 10 weeks of coding <br/> Time to build: 2 weeks</div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Projects;