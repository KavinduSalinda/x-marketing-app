import React from 'react'
import '../styles/NavBar.css'
import Button from './Button'
import Logo from './Logo'

function NavBar() {

    const handleBuyToken = () => console.log('Buy Token Clicked')

    return (
    <header className="header-container">
        <div className="logo">
            <Logo />
        </div>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#tokenomics">Tokenomics</a></li>
                <li><a href="#contact">Roadmap</a></li>
                <li><a href="#faq">FAQ</a></li>
            </ul>
        </nav>
        <div className="buy-token">
            <Button onClick={()=>{handleBuyToken()}} text="Buy Token" />
        </div>
    </header>
  )
}

export default NavBar