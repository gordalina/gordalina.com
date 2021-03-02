import React from "react"
import { injectGlobal } from "@emotion/css"
import FontOptimization from "./FontOptimization"
import Footer from "./Footer"

injectGlobal`
  ::selection {
    background-color: var(--theme-ui-colors-highlight);
  }
`

interface LayoutProps {
  children: any
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div sx={{ padding: [4, 6], flex: "1 0 auto" }}>
        <FontOptimization />
        <main sx={{ maxWidth: '38em' }}>{children}</main>
      </div>
      <div sx={{ px: [4, 6], pb: [4, 5], flexShrink: 0 }}>
        <Footer />
      </div>

    </div>
  )
}

export default Layout
