import { Component } from 'react';
import './Nav.scss';
import logo from '../../stactics/logo.png'
class Nav extends Component{
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <nav className='nav w-full bg-c7-ligth-blue flex items-center'>
                <div className='flex w-full justify-between'>
                    <img className='nav-logo' src={logo} alt="carseven logo" />
                    <div className='nav-menu flex flex-col justify-around'>
                        <div className='nav-hamburger bg-c7-black w-full'></div>
                        <div className='nav-hamburger bg-c7-black w-full'></div>
                        <div className='nav-hamburger bg-c7-black w-full'></div>
                    </div>
                </div>
            </nav>
        )
    } 
}

export default Nav