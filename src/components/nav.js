import React, { Component } from "react"

export default class Nav extends Component {
  // constructor() {
  //   super()
  //   this.handleClick = this._handleClick.bind(this)
  // }

  // componentDidUpdate() {
  //   this._handleClick()
  // }

  // _handleClick() {
  //   const nav = this._acc.children[0].childNodes[1]
  //   nav.classList.toggle("active")
  // }

  render() {
    return (
      <header className="nav_container">
        <nav className="nav_navBar">
          <div className="nav_logo">MW</div>
          <ul className="nav_links">
            <li>
              <a href="#Home" className="nav_active">
                Home
              </a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Experience">Experience</a>
            </li>
            <li>
              <a href="#Work">Work</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>

          <ul className="nav_social">
            <li>
              <a
                href="mailto:mattwong59@gmail.com"
                target="_blank"
                className="far fa-envelope icon"
              />
            </li>
            <li>
              <a
                href="https://github.com/mattwong59"
                target="_blank"
                className="fab fa-github icon"
              />
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mattwong59/"
                target="_blank"
                className="fab fa-linkedin icon"
              />
            </li>
            <li>
              <a
                href="https://codepen.io/mattwong59"
                target="_blank"
                className="fab fa-codepen icon"
              />
            </li>
          </ul>

          <div className="menu-toggle">
            <i className="fas fa-bars" aria-hidden="true"></i>
          </div>
        </nav>
      </header>
    )
  }
}
