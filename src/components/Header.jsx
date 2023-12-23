import React from 'react'
import "../App.css"

const Header = ({count,handleShow}) => {
  return (
    <div className='flex shopping-cart'>
    <div onClick={()=>handleShow(false)}>Shopping cart app</div>
    <div onClick={()=>handleShow(true)}>Cart
        <sup>{count}</sup>
    </div>
    </div>
  )
}

export default Header