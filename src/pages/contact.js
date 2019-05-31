import React from "react"
import { Link } from "gatsby"
import Header from "../components/header/header"

export default () => (
  <div>
    <Link to="/">Home</Link>
    <Header headerText="Contact" />
    <p>Send us a message!</p>
  </div>
)
