import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import theme from "src/theme.json"
import { device } from "src/utils/device"

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    --color-text: ${theme.colors.text};
    --color-muted: ${theme.colors.muted};
    --color-primary: ${theme.colors.primary};
    --color-secondary: ${theme.colors.secondary};
    --color-background: ${theme.colors.background};

    --spacing: 3rem;
    --quarter-spacing: 0.75rem;
    --half-spacing: 1.5rem;
    --double-spacing: 6rem;
  }

  body {
    color: var(--color-text);
    background: var(--color-background);
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: 0.025em;
    margin: 0 0 0.875em;
  }

  p {
    line-height: 1.78rem;
  }

  @media ${device.phone} {
    :root {
      font-size: 16px;
      line-height: 1.54em;
    }
  }
`

export default GlobalStyle
