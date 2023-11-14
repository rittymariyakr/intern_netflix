import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show , setShow] = useState(false)
    //for setting navabar background color black after the height 550px
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>550){
                setShow(true)
            }
            else{
                setShow(false)
            }
        })
    })
  return (
    //if show is true then it will also get the property of class nav-bar and also nav otherwise it will only get nav property
    <div className={`${show && 'nav-bar'} nav`}>
        <img width={'150px'} src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="no img" />
    </div>
  )
}

export default Nav
