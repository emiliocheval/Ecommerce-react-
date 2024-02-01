import React from 'react'
import './Hero.css'
import handIcon from '../Assets/hand_icon.png'
import arrowIcon from '../Assets/arrow.png'
import heroImage from '../Assets/hero_image.png'
import laptopImage from '../Assets/laptop2.jpg'


const Hero = () => {
    return (

        <div className='hero'>
            <h1 className='hero-title'>NEW ARRIVAL</h1>
            <img src={laptopImage} alt="" />
        </div>

    )
}

export default Hero