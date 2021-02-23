import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import theme from "src/theme"
import Brand from "src/images/brand/horizontal.svg"
import ThemeToggle from "./ThemeToggle"
import SocialImages from "../home/SocialImages"

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Footer: React.FC = () => (
  <Container sx={{ mt: 6 }}>
    <Link to="/">
      <Brand style={{
        stroke: theme.colors.muted,
        fill: theme.colors.muted,
        width: '2em',
        height: '2em'
      }} />
    </Link>

    <SocialImages />

    <ThemeToggle />
  </Container>
)

export default Footer
