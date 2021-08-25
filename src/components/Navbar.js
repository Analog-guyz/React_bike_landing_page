import './Navbar.css';
import Logo from '../img/logoart.png'
import React,{useState} from 'react';

function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
}
  return (
    <nav className="navbar">
        <div className="menu-icon" onClick={handleClick}>
            <i className = {click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        
        <div className="nav-wrapper">
            <div className="logo-wrapper">
            <a href=""> <img src={Logo}/></a>
                <div className="logo-text">
                    <p>odyssey</p>
                    <p>BICYCLE</p>
                </div>
            </div>
            <div className={click ? "link-wrapper active" : "link-wrapper"}>
                <ul>
                  <li><a href="">BIKES</a></li>
                  <li><a href="">SERVICES</a></li>
                  <li><a href="">ABOUT</a></li>
                </ul>
            </div>
            
        </div>
      
    </nav>
  );
}

export default Navbar;
