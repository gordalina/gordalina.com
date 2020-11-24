import React from "react"
import { Helmet } from "react-helmet"

const FontOptimization: React.FC = () => (
  <Helmet
    link={[
      { rel: "dns-prefetch", href: "//fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anoymous",
      },
    ]}
  />
)

export default FontOptimization
