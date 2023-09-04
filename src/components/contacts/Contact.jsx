




import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <section className="c-wrraper">
<div className="paddings innerWidth flexCenter c-container">

{/* left side */}
<div className='flexColStart c-left'>
    <span className='orangeText'>our contacts</span>
    <span className='primaryaText'>easy to contact us</span>
    <span className='secondaryText'>we always ready to help by provaiding the best service for you 
<br /> we belive a good blace to live can make your life better</span> 

<div className="flexColStart contactmodes">
{/* first row */}
<div className="flexStart row">
<div className="flexColCenter mode">
    <div className="flexCenter">
        <div className="flexCenter icon">
            <MdCall size={25} />
        </div>
    <div className="flexColStart detail">
        <span className='primaryText'>Call</span>
        <span className='secondaryText'>0913124546</span>
    </div>
    </div>
<div className="flexCenter button">Call now</div>
</div>
{/* second mode */}
<div className="flexColCenter mode">
    <div className="flexCenter">
        <div className="flexCenter icon">
            <BsFillChatDotsFill size={25} />
        </div>
    <div className="flexColStart detail">
        <span className='primaryText'>Chat</span>
        <span className='secondaryText'>0913124546</span>
    </div>
    </div>
<div className="flexCenter button">Chat now</div>
</div>

</div>

{/* second row */}
<div className="flexStart row">
<div className="flexColCenter mode">
    <div className="flexCenter">
        <div className="flexCenter icon">
            <MdCall size={25} />
        </div>
    <div className="flexColStart detail">
        <span className='primaryText'>Video Call</span>
        <span className='secondaryText'>0913124546</span>
    </div>
    </div>
<div className="flexCenter button">Video Call now</div>
</div>
{/* second mode */}
<div className="flexColCenter mode">
    <div className="flexCenter">
        <div className="flexCenter icon">
            <HiChatBubbleBottomCenter size={25} />
        </div>
    <div className="flexColStart detail">
        <span className='primaryText'>Message</span>
        <span className='secondaryText'>0913124546</span>
    </div>
    </div>
<div className="flexCenter button">Message now</div>
</div>

</div>



</div>

</div>
{/* right */}

<div className="c-right">
<div className="image-container">
<img src="./contact.jpg" alt="" />

</div>
</div>


</div>





    </section>
  )
}

export default Contact