import React from "react"
import { Link } from "gatsby"
import theme from "src/theme"
import Brand from "src/images/brand/horizontal.svg"

const Footer: React.FC = () => (
  <footer sx={{ mt: 5 }}>
    <Link to="/">
      <Brand style={{
        stroke: theme.colors.muted,
        fill: theme.colors.muted,
        width: '2rem',
        height: '2rem'
      }} />
    </Link>
  </footer>
)

export default Footer
