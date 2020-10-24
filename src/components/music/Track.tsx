/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import styled from "@emotion/styled"
import { MusicTrack } from "src/types"
import AudioPlayer from "./AudioPlayer"

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Legend = styled.div`
  display: flex;
  flex-direction: column;
`

const Year = styled.span``
const Title = styled.span``

const Track: React.FC<MusicTrack> = ({ name, src, year }) => {
  return (
    <Container sx={{mb: 4}}>
      <AudioPlayer src={src} size={48} />
      <Legend sx={{ml: 4}}>
        <Year sx={{ color: 'muted',  fontSize: '0.75em', lineHeight: '1em'}}>{year}</Year>
        <Title>{name}</Title>
      </Legend>
    </Container>
  )
}

export default Track
