import {Component } from 'react';
import './Card.scss';

class Card extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='card flex items-center justify-center rounded-lg border border-c7-ligth-blue flex-col'>
                <div className='card-icon-container rounded-lg pb-cr-8'>
                    <img src={this.props.urlImg }/>
                </div>
                <p className='font-extrabold text-14 text-center'>{this.props.service}</p>
            </div>
        )
    }
}

export default Card;