import React, { Component } from "react"
import { Link } from "gatsby"

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/contact/">Contact</Link>
        <h1>Gatsby Default Starter</h1>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
    )
  }
}

export default Header
