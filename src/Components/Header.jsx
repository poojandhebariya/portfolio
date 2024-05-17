import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {

  const [matchedItem, setMatchedItem] = useState(null);
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/service', label: 'Service' },
    { path: '/skills', label: 'Skills' },
    { path: '/project', label: 'Project' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const currentUrl = window.location.pathname;
    const matchedNavItem = navItems.find(item => item.path === currentUrl);
    setMatchedItem(matchedNavItem);
  }, [navItems]);



  return (
    <div className='header'>
      <div className='contents'>
        <p className='left-header'>Portfolio</p>
        <nav className='navbar'>
          <ul className='lists'>
            {navItems.map((item, index) => (
              <li key={index} className={matchedItem && matchedItem.path === item.path ? 'highlight' : 'nothighlight'}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
