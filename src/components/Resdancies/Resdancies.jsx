import React from 'react'
import { Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import "./Resdancies.css"
import { sliderSetting } from '../../utils/Common'
import data from '../../utils/slider.json'
const Resdancies = () => {
  return (
    <section className='r-wrapper'>
    <div className=" paddings innerWidth r-container">
<div className="flexColStart r-head">
    <span className='orangeText'> Best Choices</span>
<span className='primaryText'>popular Resdancie</span>
</div>
    <Swiper {...sliderSetting}>
<SliderButton/>
{data.map((card, i) => (
<SwiperSlide key={i}> 
<div className="flexColStart r-card">
<img src={card.image} alt='home' />
<span className="secondaryText r-price">
<span style={{ color: "orange"}}>$</span>
<span>{card.price}</span>
</span>


<span className='primaryText'>{card.name}</span>
<span className='secondaryText'>{card.detail}</span>
</div>




</SwiperSlide>


))}






    </Swiper>
    
    
    
    </div>






    </section>
  )
}

export default Resdancies


const SliderButton = () => {
const swiper = useSwiper();
return (
<div className="flexCenter r-buttons">
<button onClick={() => swiper.slidePrev()}>&lt;</button>
<button onClick={() => swiper.slideNext()}>&gt;</button>
</div>

)
}









