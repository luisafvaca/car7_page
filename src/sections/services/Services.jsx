import {Component } from 'react';
import Card from '../../components/card/Card'

class Services extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <section className='hero'>
                <h1 className='text-c7-sky-blue font-bold text-14 pb-c7-12-'>Our services</h1>
                <p className='font-extrabold text-18'>Lets you maintain inventory control</p>
                <div>
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