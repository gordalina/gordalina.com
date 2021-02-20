import { Page } from "gatsby"
import React from "react"
import Layout from "src/components/layout/Layout"
import FooterLayout from "src/components/layout/FooterLayout"

const PageLayout: React.FC = ({ location, children }) => {
  const Wrapper = location.pathname === '/' ? Layout : FooterLayout

  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default PageLayout
