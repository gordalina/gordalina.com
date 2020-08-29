import React from "react"
import styled from "styled-components"

import Layout from "src/components/layout/Layout"
import SEO from "src/components/SEO"
import Header from "src/components/ui/Header"

import { MusicTrack } from "src/types"
import Playlist from "../components/music/Playlist"

const tracks: MusicTrack[] = [
  { name: "Arrivederci", year: 2018, src: "/music/2018-arrivederci.mp3" },
  { name: "Shining", year: 2017, src: "/music/2017-shinning.mp3" },
  { name: "Atme", year: 2016, src: "/music/2016-atme.mp3" },
  { name: "Paixão", year: 2013, src: "/music/2013-passion.aac" },
  {
    name: "Untitled ft. Marco & Sandra",
    year: 2012,
    src: "/music/2012-untitled.mp3",
  },
  { name: "Somnium", year: 2012, src: "/music/2012-somnium.mp3" },
  { name: "O Adeus", year: 2010, src: "/music/2010-o-adeus.mp3" },
  { name: "Limão", year: 2009, src: "/music/2009-lemon.mp3" },
]

const PhotographyPage: React.SFC = () => (
  <Layout>
    <SEO title="Music" />

    <Header>
      <h1>Music</h1>

      <p>
        Music, for me, is a way of expressing emotion. Interestingly it's an art
        that can draw paralells to programming, such as esthetics, simpleness
        rythym. Unfortunately my musical ability trails the programming one.
      </p>

      <Playlist tracks={tracks} />
    </Header>
  </Layout>
)

export default PhotographyPage
