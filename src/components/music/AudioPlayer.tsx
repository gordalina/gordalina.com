import React, { useState } from "react"
import { Media, Player } from "react-media-player"
import styled from "styled-components"

const CirclePlayer = styled.button`
  display: block;
  padding: 0;
  margin: 0;
  border: 0;
  line-height: 0;
  background-color: transparent;

  fill: none;
  stroke: var(--color-muted);
  stroke-width: 3;

  cursor: pointer;
  outline: 0;
`

const CircleProgress = styled.circle`
  stroke: var(--color-primary);
  transition: 350ms stroke-dashoffset;

  /* position the start of the circle at the top */
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`

const Play = styled.polygon`
  fill: var(--color-muted);
  stroke-width: 0;
`

const Pause = styled.g`
  fill: var(--color-muted);
  stroke-width: 0;
`

interface AudioPlayerProps {
  size?: number
  src: string
}

interface MediaState {
  currentTime: number
  duration: number
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, size = 64 }) => {
  const radius: number = 14.5
  const c: number = Math.PI * (radius * 2)
  const [progress, setProgress] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)

  const onTimeUpdate = ({ currentTime }: MediaState) => {
    if (duration > 0) {
      setProgress(((currentTime / duration) * 100) % 100)
    }
  }

  const onDuration = (state: MediaState) => {
    setDuration(state.duration)
  }

  const PlayButton = <Play points="13.083,11.5 20.583,16 13.083,20.5" />

  const PauseButton = (
    <Pause>
      <rect width="3" height="9" x="11.5" y="11.5" />
      <rect width="3" height="9" x="17.5" y="11.5" />
    </Pause>
  )

  return (
    <Media>
      {({ isPlaying, playPause }) => (
        <CirclePlayer onClick={() => playPause()}>
          <Player
            src={src}
            vendor="audio"
            onTimeUpdate={onTimeUpdate}
            onDuration={onDuration}
          />
          <svg width={size} height={size} viewBox="0 0 32 32">
            <circle cx="16" cy="16" r={radius} />
            <CircleProgress
              cx="16"
              cy="16"
              r={radius}
              style={{
                strokeDasharray: c,
                strokeDashoffset: Math.abs((progress * c) / 100 - c),
              }}
            />
            {isPlaying ? PauseButton : PlayButton}
          </svg>
        </CirclePlayer>
      )}
    </Media>
  )
}

export default AudioPlayer
