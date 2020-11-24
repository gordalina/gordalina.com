import React from "react"
import { injectGlobal } from "@emotion/css"
import ThemeToggle from "./ThemeToggle"

import FontOptimization from "./FontOptimization"

injectGlobal`
  * {
    box-sizing: border-box;

    /* gold */
    --primary: #e3b23c;
    --primary-light: #F0D494;
    --primary-lighter: #FAF1DC;
    --secondary: #E9E4F1;
  }

  a {
    color: var(--primary);
    text-decoration-color: var(--primary-light);
  }

  a:hover {
    text-decoration: none;
  }

  ::selection {
    background-color: var(--primary-lighter);
  }
`

interface LayoutProps {
  children: any
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div sx={{ padding: [4, 6], minHeight: "100%" }}>
      <FontOptimization />
      <main>{children}</main>
      {/* <ThemeToggle /> */}
    </div>
  )
}

export default Layout
