import React, { Component } from "react"

export default class footer extends Component {
  render() {
    return (
      <footer>
        Built by Matt Wong © {new Date().getFullYear()}
        <img
          src="https://www.codewars.com/users/mattwong59/badges/micro"
          alt="codewars badge"
        />
      </footer>
    )
  }
}
