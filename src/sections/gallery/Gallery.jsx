import {Component } from 'react';

import './Gallery.scss';

class Gallery extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <section className='gallery pt-cr-16'>
                <h1 className='gallery-title text-c7-sky-blue font-bold text-14 pb-c7-12 text-center mb-cr-12'>Gallery</h1>
                <div>
                    <img className="gallery-img w-full" src="https://www.elcarrocolombiano.com/wp-content/uploads/2021/04/20210420-WORLD-CAR-OF-THE-YEAR-VOLKSWAGEN-ID-4-02.jpg"></img>
                    <img className="gallery-img w-full" src="https://www.elcarrocolombiano.com/wp-content/uploads/2021/04/20210420-WORLD-CAR-OF-THE-YEAR-VOLKSWAGEN-ID-4-02.jpg"></img>
                    <img className="gallery-img w-full" src="https://www.elcarrocolombiano.com/wp-content/uploads/2021/04/20210420-WORLD-CAR-OF-THE-YEAR-VOLKSWAGEN-ID-4-02.jpg"></img>
                    <img className="gallery-img w-full" src="https://www.elcarrocolombiano.com/wp-content/uploads/2021/04/20210420-WORLD-CAR-OF-THE-YEAR-VOLKSWAGEN-ID-4-02.jpg"></img>
                </div>
            </section>
        )
    }
}

export default Gallery;