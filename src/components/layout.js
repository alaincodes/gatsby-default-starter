import React, { Component } from "react"

// Styles
import "./styles.sass"

// SEO
// import Helmet from "./helmet/helmet"

// Components
import Header from "./header/header"

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default Layout
