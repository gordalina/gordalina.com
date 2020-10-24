import React from "react"
import FooterLayout from "src/components/layout/FooterLayout"
import Header from "src/components/ui/Header"

export default React.FC = ({ children }) => (
  <FooterLayout>
    <Header>
      {children}
    </Header>
  </FooterLayout>
)
