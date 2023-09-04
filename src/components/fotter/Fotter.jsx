




import React from 'react'
import "./Fotter.css"
const Fotter = () => {
  return (
    <section className="f-wrapper">
<div className="paddings innerWidth flexCenter f-container">
{/* left side */}
<div className=" flexColStart f-left">
<img src="./logo2.png" alt="" width={120} />
<span className="secondarytext">
    our vision is to make all people <br />
  to best place to live them
</span>

</div>
<div className="flexColStart f-right">
<span className='primaryText'>Information</span>
<span className='secondaryText'>Kara Kore, Addis Ababa, Ethiopa</span>
<span></span>
<div className=" flexCenter f-menu">
    <span>properties</span>
    <span>product</span>
    <span>services</span>
    <span>About Us</span>
</div>
</div>

</div>


    </section>
  )
}

export default Fotter