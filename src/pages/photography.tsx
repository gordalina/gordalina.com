import React from "react"
import Layout from "src/components/layout/Layout"
import InstagramFeed from "src/components/photography/InstagramFeed"
import SEO from "src/components/SEO"
import Header from "src/components/ui/Header"

import { instagram } from "src/utils/links"

const PhotographyPage: React.SFC = () => (
  <Layout>
    <SEO title="Travelling Photography" />

    <Header>
      <h1>Travelling Photography</h1>

      <p>
        I love travelling and I have a goal of visiting 100 countries this
        decade.
      </p>

      <p>
        During my travels, I snap photographs; Some mementos, others relics and
        inevitably they end up on my <a href={instagram}>instagram feed</a> with
        the appropriate filter.
      </p>
    </Header>

    <InstagramFeed />
  </Layout>
)

export default PhotographyPage
