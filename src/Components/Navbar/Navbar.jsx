import React from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import {useState} from "react";

const Navbar = () => {

     const [menu, setMenu] = useState("shop")

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="logo" />
                <p>BOOKSMART</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("entrance")}}>ENTRANCE EXAM{menu==="entrance"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("school")}}>SCHOOL BOOKS{menu==="school"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("others")}}>OTHERS{menu==="others"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button>Order</button>
                <img src={cart_icon} alt="cart"/>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}


export default Navbar;