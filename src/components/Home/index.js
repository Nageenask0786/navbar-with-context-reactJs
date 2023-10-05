import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const bgClassName = isDarkTheme ? 'dark' : 'light'
      const RouteHeading = isDarkTheme ? 'heading1' : 'heading2'
      return (
        <div>
          <Navbar />
          <div className={`bg ${bgClassName}`}>
            <img src={homeImage} alt="home" className="image" />
            <h1 className={RouteHeading}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
