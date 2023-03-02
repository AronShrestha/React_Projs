import React from 'react'
import reactLogo from './images/logo192.png'

function Header(){
    return (
        <header>
        <nav className='nav'>
            <img src={reactLogo} alt='React logo' className='react-logo'></img>
           <ul className='nav-items'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
           </ul>
        </nav>
    </header>
    )
}
export default Header