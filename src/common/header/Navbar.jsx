import React,{useState} from 'react'
import './Header.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Navbar = () => {
    const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <Router>
    <>
    <header className='header'>
        <div className='container d_flex'>
            <div className='categories d_flex'>
                <span className='fa solid fa-border-all'></span>
                <h4>
                    Categories <i className='fa fa-chevron-down'></i>
                </h4>
            </div>

            <div className='navlink'>
                <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={()=>setMobileMenu(false)}>
                    <li>
                        <Link to = '/'>Home</Link>
                    </li>
                    <li>
                        <Link to = '/pages'>Pages</Link>
                    </li>
                    <li>
                        <Link to = '/user'>User Account</Link>
                    </li>
                    <li>
                        <Link to = '/vendor'>vendor Account</Link>
                    </li>
                    <li>
                        <Link to = '/track'>Track order</Link>
                    </li>
                    <li>
                        <Link to = '/conatct'>Contact</Link>
                    </li>
                </ul>

                <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                {MobileMenu ? <i className='fas fa-times open home-btn'></i> : 
                <i className="fa-solid fa-xmark close"></i>
                }
                </button>
            </div>
        </div>
    </header>
    </>
    </Router>
  )
}

export default Navbar