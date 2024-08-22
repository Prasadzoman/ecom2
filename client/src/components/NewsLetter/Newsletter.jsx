import React from 'react'
import "./newsletter.css"
const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Suscribe to stay updated</p>
      <div>
        <input type="email" placeholder="Your Email Id"/>
        <button>Suscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
