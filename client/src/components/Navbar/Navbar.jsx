import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
  const [menu,setmenu]=useState('shop')
  const {getTotalCartItems}=useContext(ShopContext)
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>E-Pay</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setmenu("shop")}}><Link to="/" style={{textDecoration:'none'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("mens")}}><Link to="/mens" style={{textDecoration:'none'}}>Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("womens")}}><Link to="/womens" style={{textDecoration:'none'}}>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("kids")}}><Link to="/kids" style={{textDecoration:'none'}}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt=""/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
