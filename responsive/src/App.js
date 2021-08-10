import React from "react"
import NavBar from "./Components/NavBar";
import Animation from './Components/Animation'
import './App.css'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      navLinks: ['services', 'portfolio', 'about', 'team', 'contact'],
      isMenuOpen: false,
    }
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen})
  }

  render(){
    const { isMenuOpen, navLinks } = this.state
    return(
      <div>
      <div className= 'App'>
        <NavBar
          isMenuOpen={isMenuOpen}
          toggleMenu={this.toggleMenu}
          links={navLinks}/>
      </div>
      <div>
      <img className="big-image" src='https://sm.askmen.com/askmen_in/photo/default/featured-image-10_kdst.jpg'/>
      </div>
    </div>
    )
  }
}

export default App;