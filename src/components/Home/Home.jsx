import React from 'react'
import Header from '../Header/Header'
import About from '../About/About'
import OurTeam from '../OurTeam/OurTeam'
import styles from './Home.module.css'
import imgFloat from '../../assets/volunteers.png'
import Animation from '../Animation/Animation'


function Home({ className, ...rest }) {
    return <>
    <div id="header"><Header /></div>
    <div id="about"><About /></div>
    <div id="team"><OurTeam /></div>

    <Animation>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-20 py-10 px-7 rounded-3xl ${styles.ourSites} items-center ${className}`} dir="ltr"  {...rest}>
            <div>
                <img src={imgFloat} alt="imgFloat" className={`p-7 max-w-[300px] ${styles.swim}`}/>
            </div>

            <div className='text-end flex flex-col justify-center items-end gap-5 h-full'>
                <div>
                    <h1 className='font-bold text-4xl text-white py-2'>جرب طوعني</h1>
                    <p className='text-2xl text-white'>موجود على كل الأجهزة عشان تقدر تتطوع وانت في أي مكان</p>
                </div>
                <div className='flex justify-end items-center gap-5'>
                    <a href="https://taw3ny.vercel.app"
                    target="_blank">
                    <button className='bg-neutral-900 text-white px-3.5 py-2 text-2xl rounded-3xl hover:cursor-pointer'>الموقع <i className="fa-solid fa-globe"></i></button>
                    </a>
                    <a href="https://drive.google.com/drive/folders/16KFWlQ4GnfuLmX6a6AdBFy2whdvfeFjL?usp=sharing"
                    target="_blank">
                    <button className='bg-white px-3.5 py-2 text-2xl rounded-3xl hover:cursor-pointer'>تطبيق الموبايل <i className="fa-solid fa-mobile-screen-button"></i></button>
                    </a>

                </div>   
            </div>
        
        </div>
    </Animation>
    
    </>
}

export default Home
