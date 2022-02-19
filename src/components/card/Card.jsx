import {Component } from 'react';
import './Card.scss';

class Card extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='card'>
                <img src={this.props.urlImg }/>
                <p className='font-extrabold text-18'>{this.props.service}</p>
            </div>
        )
    }
}

export default Card;