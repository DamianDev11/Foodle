import React, { useEffect, useState } from 'react'

const CartList = ({cart}) => {

  const [CART,setCART] = useState([])

  useEffect(()=>{
    setCART(cart)
  },[cart])

  return (
    <div>
    {CART?.map((c,cindex)=>{
        return (
            <div key={cindex}>
            <img src={c.url} width={40} alt={c.name} />
            <span>{c.name}</span>
            <button onClick={()=>{
              const _CART = CART.map((item,index)=>{
                return cindex === index ? {...item,quantity:item.quantity > 0 ? item.quantity - 1: 0} : item
              })
              setCART(_CART)
            }}>+</button>
            <span>{c.quantity}</span>
            <button onClick={()=>{
              const _CART = CART.map((item,index)=>{
                return cindex === index ? {...item,quantity:item.quantity+1} : item
              })
              setCART(_CART)
            }}>+</button>
            <span>Rs. {c.price * c.quantity}</span>
            </div>
        )
    })}
    <p>Total : <span></span>
    {
        CART.map((item)=>item.price * item.quantity).reduce((total,value)=>total+value,0)
    }
    </p>
    </div>
  )
}

export default CartList