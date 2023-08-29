import React, { useState } from 'react'
import './nav.scss'
import { SlMenu, SlHome, SlUser, SlPhone, SlBriefcase, SlEyeglass, SlCloudDownload } from 'react-icons/sl'
import { NavLink } from 'react-router-dom'

const Nav = ({ onMenuItemClick }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  const handleClick = () => {
    setIsButtonDisabled(true)
    setTimeout(() => setIsButtonDisabled(false), 1000)
  }

  const navLinks = [
    {to: '/', title: 'Home', icon: <SlHome />},
    {to: '/about', title: 'About', icon: <SlUser />},
    {to: '/work', title: 'Qualification', icon: <SlBriefcase />},
    {to: '/portfolio', title: 'Portfolio', icon: <SlEyeglass />},
    {to: '/', title: 'Q', icon: <SlPhone />},
  ]
  return (
    <nav className="nav d-flex flex-direction-column justify-content-between">
      <div className="item icon-wrapper d-flex justify-content-center align-items-center helper" data-helper="Hello world!">
        <SlMenu />
      </div>
      <div className="item d-flex flex-direction-column align-items-center icons">
        {navLinks.map(({to, title, icon}) =>
          <div className="item icon-wrapper helper" data-helper={title} key={title}>
            <NavLink to={to} onClick={() => {onMenuItemClick(); handleClick()}} style={{ pointerEvents: isButtonDisabled ? 'none' : '' }}>
              {icon}
            </NavLink>
          </div>
        )}
      </div>
      <div className="item icon-wrapper d-flex justify-content-center align-items-center helper" data-helper="Download CV">
        <a href="/">
          <SlCloudDownload />
        </a>
      </div>
    </nav>
  )
}

export default Nav