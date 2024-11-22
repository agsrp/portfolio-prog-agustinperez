import React from 'react'
import './Header.css'
import { Navigate, Link, Route } from 'react-router-dom';

const Header = () => {

  return (
    <header>
        <div className="menu-cont menu-op">
            <Link to='/' className="logo-nav">Agustin R. Perez</Link>
            <input type="checkbox" id="menu-nav" />
            <label for="menu-nav">
                <div className="contMenuSpan">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </label>
            <nav className="navbar">
                <ul>
                    <li><Link to='/Contacto'>Contacto</Link></li>
                </ul>
                <div className="nav-htp">
                    <a href="#" className="HTP-nav-btn">DESCARGAR CV ↓</a>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header