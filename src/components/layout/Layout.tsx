import React from "react"
import { injectGlobal } from "@emotion/css"
import ThemeToggle from "./ThemeToggle"

import FontOptimization from "./FontOptimization"

//   * {
//     box-sizing: border-box;
//   }

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
      {/* <ThemeToggle /> */}
      <main sx={{ maxWidth: '38em' }}>{children}</main>
    </div>
  )
}

export default Layout
