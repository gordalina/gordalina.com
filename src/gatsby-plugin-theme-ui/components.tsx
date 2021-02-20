import React from 'react'
import ThemeUIPrism from '@theme-ui/prism'
import Prism from 'prismjs/components/prism-core'

// import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-clike'
// import 'prismjs/components/prism-css'
// import 'prismjs/components/prism-docker'
import 'prismjs/components/prism-elixir'
// import 'prismjs/components/prism-erlang'
// import 'prismjs/components/prism-graphql'
// import 'prismjs/components/prism-hcl'
// import 'prismjs/components/prism-http'
// import 'prismjs/components/prism-http'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-js-extras'
// import 'prismjs/components/prism-json'
// import 'prismjs/components/prism-jsstacktrace'
// import 'prismjs/components/prism-jsx'
// import 'prismjs/components/prism-markup'
// import 'prismjs/components/prism-markdown'
// import 'prismjs/components/prism-regex'
// import 'prismjs/components/prism-sql'
// import 'prismjs/components/prism-tsx'
// import 'prismjs/components/prism-yaml'

import { Link } from "gatsby"
import SEO from "src/components/SEO"
import Playlist from "src/components/music/Playlist"
import InstagramFeed from "src/components/photography/InstagramFeed"
import SocialImages from "src/components/home/SocialImages"

export default {
  pre: (props) => props.children,
  code: (props) => <ThemeUIPrism {...props} Prism={Prism} />,
  InstagramFeed,
  Link,
  Playlist,
  SEO,
  SocialImages,
}
