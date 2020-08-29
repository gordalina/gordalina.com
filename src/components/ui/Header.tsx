import React from "react"
import styled from "styled-components"

import { device } from "src/utils/device"

const StyledHeader = styled.header`
  margin: var(--spacing) 0;
  max-width: 36em;

  @media ${device.phone} {
    margin: var(--half-spacing) 0;
  }
`

interface HeaderProps {
  children: any
}

const Header: React.FC<HeaderProps> = ({ children }) => (
  <StyledHeader>{children}</StyledHeader>
)

export default Header
