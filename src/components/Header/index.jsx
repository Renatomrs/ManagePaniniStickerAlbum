import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Context } from '../../contexts'

import Menu from '../Menu'

import "./styles.css"

const Header = () => {
  const navigate = useNavigate()

  const { 
    menu, 
    setMenu
  } = Context()

  const handleShowMenu = () => setMenu(!menu)

  return (
    <header>
      <div className="header-container">
        <button
          className='logo'
          type='button'
          onClick={() => navigate("/")}
        >
          <img 
            className='img-logo'
            src="https://panini.com.br/media/logo/stores/1/panini-logo_2_2_1.png" 
            alt="Logo"
          />
        </button>
      
        <nav>
          <button 
            type="button"
            className='button-menu-hamburger'
            onClick={handleShowMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              {/* <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
            </svg>
          </button>

          <Menu
            menu={menu}
          />
        </nav>
      </div>
    </header>
  )
}

export default Header
