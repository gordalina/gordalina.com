import React from "react"
import Footer from "./Footer"
import Layout from "./Layout"

const FooterLayout: React.FC = ({ children }) => (
  <Layout>
    {children}
    <Footer />
  </Layout>
)

export default FooterLayout
