import React from "react"
import Track from "./Track"
import { MusicTrack } from "src/types"

interface PlaylistProps {
  tracks: MusicTrack[]
}

export const Playlist: React.FC<PlaylistProps> = ({ tracks }) => {
  return (
    <>
      {tracks.map((track, index) => (
        <Track key={index} {...track} />
      ))}
    </>
  )
}

export default Playlist
