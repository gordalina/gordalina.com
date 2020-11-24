import { Page } from "gatsby"
import React from "react"
import Layout from "src/components/layout/Layout"
import FooterLayout from "src/components/layout/FooterLayout"
import Header from "src/components/ui/Header"

const PageLayout: React.FC = ({ location, children }) => {
  const Wrapper = location.pathname === '/' ? Layout : FooterLayout

  return (
    <Wrapper>
      <Header>
        {children}
      </Header>
    </Wrapper>
  )
}

export default PageLayout
