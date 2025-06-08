import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


function Animation({className="",children, ...rest}) {

    useEffect(() => {
        AOS.init({ duration: 800 });
      }, []);
      
    return <>
      <div data-aos="fade-up"
       className={className}
       {...rest}>
        {children}
      </div>
    </>
}

export default Animation
