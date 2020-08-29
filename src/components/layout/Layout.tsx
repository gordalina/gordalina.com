import React from "react"
import styled from "styled-components"

import GlobalStyle from "./GlobalStyle"
import FontOptimization from "./FontOptimization"
import { device } from "src/utils/device"

const Container = styled.main`
  padding: var(--spacing);

  @media ${device.phone} {
    padding: var(--half-spacing);
  }
`

interface LayoutProps {
  children: any
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <FontOptimization />
    <GlobalStyle />
    <Container>{children}</Container>
  </>
)

export default Layout
