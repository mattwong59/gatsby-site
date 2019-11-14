import React, { Component } from "react"

export default class Landing extends Component {
  render() {
    return (
      <main>
        <section className="landing">
          <h1>Hi, my name is</h1>
          <h2>Matt Wong</h2>
          <h3>I'm a developer based in Vancouver</h3>
          <p>
            Hi there I'm Matt. Currently an SQL developer working in data
            warehousing for a business intelligence. Apart from SQL, I love
            developing projects in React and playing around with all the cool
            things that are possible in CSS3.{" "}
          </p>

          <div>
            <a href="mailto:mattwong59@gmail.com">Get in Touch</a>
          </div>
        </section>
      </main>
    )
  }
}
