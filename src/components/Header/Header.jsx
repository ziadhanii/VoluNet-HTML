import React from 'react'
import img from '../../assets/hero.png'
import Animation from '../Animation/Animation'


function Header({ className, ...rest }) {
    return <>
        <Animation>
            <header className={`w-full h-[60vh] mb-20 ${className}`} dir="rtl" {...rest}>
                <img src={img} alt="haederImg" className='w-full h-full' />
            </header>
        </Animation>
        
    </>
}

export default Header
