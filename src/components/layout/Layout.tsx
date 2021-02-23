import React from "react"
import { injectGlobal } from "@emotion/css"
import FontOptimization from "./FontOptimization"
import Footer from "./Footer"

injectGlobal`
  a:hover {
    text-decoration: none;
  }

  ::selection {
    background-color: var(--theme-ui-colors-highlight);
  }
`

interface LayoutProps {
  children: any
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div sx={{ padding: [4, 6], minHeight: "100%" }}>
      <FontOptimization />
      <main sx={{ maxWidth: '38em' }}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
