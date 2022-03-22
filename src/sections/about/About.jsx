import {Component } from 'react';
import carmb from '../../stactics/car_mb.png';

import './About.scss';

class About extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <section className='about w-full relative bg-c7-sky-blue text-c7-white px-cr-16 pt-cr-16 pb-cr-64'>
                <h1 className='about-title text-c7-white text-center font-bold text-14 mb-cr-72'>About us</h1>
                <p className='font-semibold text-36 text-center'>We work with passion...</p>
                <p className='text-14 mt-cr-24'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
                <div className='about-stadistics-container'>
                    <h2 className='text-36 text-center font-semibold pt-cr-16 pb-cr-16'>In the last year...</h2>
                    <div>
                        <p className='text-24 font-semibold'>We took </p>
                        <p className='text-36 font-bold'>1,878,733</p>
                        <p className='text-24 font-semibold'>Photos</p>
                    </div>
                    <div className='text-right'>
                        <p className='text-36 font-bold'>71,456</p>
                        <p className='text-24 font-semibold'>Cars in total</p>
                    </div>
                    <div className='text-36 font-bold'>with</div>
                    <div className='flex justify-center items-baseline'>
                        <span className='text-80 font-bold'>52</span>
                        <p className='text-36 font-bold'>DEALERS</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;