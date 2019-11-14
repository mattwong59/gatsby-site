import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import Landing from "../components/landing"
import Footer from "../components/footer"
import "../styles/combined.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Matt Wong" />
    <Nav />
    <Landing />
    <Footer />
  </Layout>
)

export default IndexPage
