import React from "react"
import styled from "@emotion/styled"
import { useColorMode } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

const Container = styled.button`
  position: absolute;

  border: 0;
  outline: 0;
  padding: 0;

  background: transparent;
  cursor: pointer;
`

const ThemeToggle: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <Container
      sx={{ color: "muted", fontSize: 2 }}
      onClick={e => {
        setColorMode(colorMode === "default" ? "dark" : "default")
      }}
    >
      <FontAwesomeIcon icon={colorMode === "default" ? faMoon : faSun} />
    </Container>
  )
}

export default ThemeToggle
