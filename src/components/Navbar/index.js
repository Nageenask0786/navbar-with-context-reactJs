import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const ChangeTheme = () => {
        toggleTheme()
      }
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const mode = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const backgroundTheme = isDarkTheme ? 'dark-theme' : 'light-theme'
      const navLink = isDarkTheme ? 'nav-items-light' : 'nav-items-dark'
      return (
        <div className={`navbar ${backgroundTheme}`}>
          <img src={imageUrl} alt="website logo" />
          <ul>
            <li>
              <Link to="/" className={navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={navLink}>
                About
              </Link>
            </li>
          </ul>
          <button type="button" onClick={ChangeTheme} data-testid="theme">
            <img src={mode} alt="theme" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
