




import React, { useState } from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, 
AccordionItemButton, AccordionItemPanel, AccordionItemState


} 
from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from "../../utils/accordion"
import './Value.css'

const Value = () => {
  return (
    <section className="v-wrapper">
<div className="paddings flexCenter innerWidth v-container">
 {/* left side */}
<div className="v-left">

<div className="image-container">
<img src='./value.png' alt='' />
 
</div>

</div>
<div className="flexColStart v-right">
<span className='orangeText'>our value</span>
    <span className='primaryText'>value we give to you</span>
    <span className='secondaryText'>
we always ready to help by provaiding the best service for you 
<br /> we belive a good blace to live can make your life better

    </span>
<Accordion 
className="accordion"
allowMultipleExpanded={false}
preExpanded={[0]}>
{data.map((item, i) => {
   
   const [className, setClassName] = useState(null)
   
   return (
<AccordionItem className={`accordionitem ${className}`} key={i} uuid={i}>
<AccordionItemHeading>
    <AccordionItemButton className='flexCenter accordionbutton'>
       <AccordionItemState>

        {({expanded}) => 
        
        expanded ? setClassName("expanded")
        : setClassName("collapsed")
        
        }
       </AccordionItemState>
       
        <div className="flexCenter icon">
            {item.icon} </div>
        <span className="primaryText">{item.heading}</span>
    <div className="flexCenter icon">
        <MdOutlineArrowDropDown size={20}/>
    </div>
    </AccordionItemButton>
</AccordionItemHeading>
<AccordionItemPanel>
    <p className="secondaryText">{item.detail}</p>
</AccordionItemPanel>
</AccordionItem>

    )
    })}

</Accordion>
</div>
</div>

    </section>
  )
}

export default Value