import {Component } from 'react';
import Card from '../../components/card/Card'

import './Services.scss';
class Services extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <section className='services px-cr-16 pt-cr-1 pb-cr-40'>
                <h1 className='services-title text-c7-sky-blue font-bold text-14 pb-cr-12 text-center'>Our services</h1>
                <p className='font-semibold text-18 text-center'>Lets you maintain inventory control</p>
                <div class="grid grid-cols-2 gap-4 mt-cr-24">
                    <Card url='test' service='Photo Services'/>
                    <Card url='test' service='Data Collection Services'/>
                    <Card url='test' service='Online Distribution'/>
                    <Card url='test' service='Windows labels and  buyers guide'/>
                </div>
            </section>
        )
    }
}

export default Services;