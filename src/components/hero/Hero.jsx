





import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import { motion, spring } from 'framer-motion'
const Hero = () => {
  return (
    <section className="hero-wrapper">
<div className=" paddings innerWidth flexCenter hero-container">
{/* left side */}
<div className="flexColStart hero-left">
    <div className="hero-title">
       <div className="orange-circle"/>
       <motion.h1
       initial={{y: "2rem", opacity:0}}
       animate={{y: 0, opacity: 1}}
       transition={{
duration: 2,
type: "spring"
       }}
       
       >
       
        Discover<br /> most Suitble<br />  Property
        
        </motion.h1>
    </div>
<div className=" flexColStart hero-des">
<span className="secondaryText">find a varietey property that suit you very easily</span>
<span className="secondaryText">forget all deficulties in finding a resdiance for you</span>
</div>
<div className="flexCenter search-bar">
    <HiLocationMarker color="var(--blue)" size={25}/>
    <input type='text' />
    <button className="button">search</button>
</div>
<div className="flexCenter status">
    <div className="flexColCenter statu">
    <span><CountUp start={8800} end={9000} duration={4}/>
    <span>+</span>
    </span>

<span className='secondaryText'>premium product</span>
</div>
<div className="flexColCenter statu">
    <span><CountUp start={1950} end={2000} duration={4}/>
    <span>+</span>
    </span>

<span className='secondaryText'>happy customers</span>
</div>
<div className="flexColCenter statu">
    <span><CountUp end={28}/>
    <span>+</span>
    </span>

<span className='secondaryText'>Award winnings
</span>
</div>

</div>
</div>
{/* right side */}
<div className="flexCenter hero-right">
    
    <motion.div 
    initial={{x: "7rem", opacity: 0}}
    animate={{x: 0, opacity: 1}}
    transition={{
        duration: 2,
        type: "spring"
    }}
    className="image-container">
    <img src="./hero-image.png" alt="" />
    
    </motion.div>
</div>
</div>






    </section>
  )
}

export default Hero