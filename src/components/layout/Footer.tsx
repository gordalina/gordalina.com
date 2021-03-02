import React from "react"
import { Link } from "gatsby"
import Brand from "src/images/brand/horizontal.svg"
import ThemeToggle from "./Footer/ThemeToggle"
import SocialImages from "./Footer/SocialImages"

export const Footer: React.FC = () => (
  <footer sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <Link to="/">
      <Brand style={{
        stroke: "var(--theme-ui-colors-muted)",
        fill: "var(--theme-ui-colors-muted)",
        width: '2em',
        height: '2em'
      }} />
    </Link>

    <SocialImages />

    <ThemeToggle />
  </footer>
)

export default Footer
