import {Component } from 'react';
import carmb from '../../stactics/car_mb.png';

import './About.scss';

class About extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <section className='about w-full relative bg-c7-sky-blue text-c7-white'>
                <h1 className='text-c7-sky-blue font-bold text-14 pb-c7-12-'>About us</h1>
                <p className='font-extrabold text-18'>We work with passion...</p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
                <div className='about-stadistics-container'>
                    <h2>In the last year...</h2>
                    <div>
                        <p>We took </p>
                        <p>1,878,733</p>
                        <p>Photos</p>
                    </div>
                    <div>
                        <p>71,456</p>
                        <p>Cars in total</p>
                    </div>
                    <div>with</div>
                    <div>
                        <span>52</span>
                        <p>DEALERS</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;