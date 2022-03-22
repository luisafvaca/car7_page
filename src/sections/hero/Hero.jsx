import {Component } from 'react';
import carmb from '../../stactics/car_mb.png';

import './Hero.scss';

class Hero extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <section className='hero w-full relative px-cr-16 pt-cr-1 mt-cr-32 md:flex'>
                <div>
                    <h1 className='hero-title text-c7-sky-blue font-bold text-14 pb-cr-12 block'>Dealer inventory specialist</h1>
                    <p className='font-extrabold text-24'>We provide solutions with dedication</p>
                </div>
                <div className='w-full absolute'>
                    <img className='hero-car m-auto' src={carmb} alt="toyota carmy" />
                </div>
            </section>
        )
    }
}

export default Hero;