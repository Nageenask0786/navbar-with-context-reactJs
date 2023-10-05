// Write your code here
// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgClassName = isDarkTheme ? 'dark' : 'light'
      const RouteHeading = isDarkTheme ? 'heading1' : 'heading2'
      const paraClass = isDarkTheme ? 'para1' : 'para2'
      return (
        <div>
          <Navbar />
          <div className={`bg ${bgClassName}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="image"
            />
            <h1 className={RouteHeading}>Lost Your Way</h1>
            <p className={paraClass}>We cannot seem to find the page</p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
