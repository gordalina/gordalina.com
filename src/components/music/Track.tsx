import React from "react"
import styled from "styled-components"
import { MusicTrack } from "src/types"
import AudioPlayer from "./AudioPlayer"

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--half-spacing);
`

const Legend = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: var(--quarter-spacing);
`

const Year = styled.span`
  font-size: 0.75em;
  color: var(--color-muted);
`

const Title = styled.span``

const Track: React.FC<MusicTrack> = ({ name, src, year }) => {
  return (
    <Container>
      <AudioPlayer src={src} size={48} />
      <Legend>
        <Year>{year}</Year>
        <Title>{name}</Title>
      </Legend>
    </Container>
  )
}

export default Track
