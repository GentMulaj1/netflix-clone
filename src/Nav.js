import React, { useEffect, useState } from 'react'
import './Nav.css'

const Nav = () => {

    const [show, handleShow] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        // return () => {
        //     window.removeEventListener("scroll");
        // }
    }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img 
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Netflix logo" 
        className='nav__logo'
       />

       <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFizMvxqXljRAa1kuJzcyLRSaimGd8pPQ7Q&usqp=CAU" 
        alt="" 
        className='nav__avatar'
       />
    </div>
  )
}

export default Nav
