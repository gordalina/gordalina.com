import React from "react"
import Footer from "./Footer"
import Layout from "./Layout"

interface LayoutProps {
  children: any
}

const FooterLayout: React.FC<LayoutProps> = ({ children }) => (
  <Layout>
    {children}
    <Footer />
  </Layout>
)

export default FooterLayout
