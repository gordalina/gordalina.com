import React from "react"
import { DarkModeSwitch, defaultProperties } from 'react-toggle-dark-mode';
import { useColorMode } from "theme-ui"
import merge from 'deepmerge';

const ThemeToggle: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode()

  const animationProperties = merge(defaultProperties, { light: { mask: { cy: '0%' } } });

  return (
    <DarkModeSwitch
      checked={colorMode === "default"}
      onChange={() => setColorMode(colorMode === "default" ? "dark" : "default")}
      size={"1em"}
      animationProperties={animationProperties}
      moonColor={"var(--theme-ui-colors-accent)"}
      sunColor={"var(--theme-ui-colors-primary)"}
    />
  )
}

export default ThemeToggle
