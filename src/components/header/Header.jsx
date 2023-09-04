




import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from "react-icons/bi"
import OutsideClickHandler from 'react-outside-click-handler'
const Header = () => {
  
  
  
  
  const[menuOpen, setMenOpen] = useState(false)
  const GetMenuStyle = (menuOpen) => {
if(document.documentElement.clientWidth <= 800){
  return {right: !menuOpen && "-100%"}
}
}
  
  return (
    <section className="h-wrapper">

<div className="flexCenter paddings innerWidth h-container">
<img src="./logo.png" alt='logo' width={100} />
<OutsideClickHandler onOutsideClick={() => {setMenOpen(false)}}>
<div className=" flexCenter h-menu" style={GetMenuStyle(menuOpen)}>

<a href="">Resdancies</a>
 <a href="">our value</a>
<a href="">contact us</a>
<a href="">Get sarted</a>

<button className='button  '>
<a href="">contact</a>
</button>

</div>
<div className="menu-icon" onClick={() =>setMenOpen((prev)=> !prev)}>
  <BiMenuAltRight />
</div>
</OutsideClickHandler>
</div>

    </section>
  
  
  
  
    )
}

export default Header