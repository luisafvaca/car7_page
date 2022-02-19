import {Component } from 'react';
import carmb from '../../stactics/car_mb.png';

import './Hero.scss';

class Hero extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <section className='hero w-full relative'>
                <h1 className='text-c7-sky-blue font-bold text-14 pb-c7-12-'>Dealer inventory specialist</h1>
                <p className='font-extrabold text-24'>We provide solutions with dedication</p>
                <img className='hero-car absolute' src={carmb} alt="toyota carmy" />
            </section>
        )
    }
}

export default Hero;