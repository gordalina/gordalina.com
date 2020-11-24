// https://coolors.co/484041-ebc670-f0d494-faf1dc-e9e4f1
const prism = require('./gatsby-plugin-theme-ui/prism.json')

const heading = {
  color: "text",
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
  letterSpacing: "0.025rem"
}

const xs = 0;
const md = 7;

const theme = {
  // useColorSchemeMediaQuery: true,

  space: [
    0, '0.125rem', '0.25rem', '0.5rem', // 0-3: fractional
    '1rem', '2rem', '4rem', '8rem',     // 4-7: multiples
    '16rem', '32rem'                    // 8+: multiples
  ],
  fonts: {
    body: 'Lato, Arial, sans-serif',
    heading: 'noe-display, serif',
    monospace: "Monaco, Menlo, monospace",
  },
  fontSizes: [
    16, 18, 21, 23, 25, 28, 32,
    21, 23, 25, 28, 32, 40, 50
  ],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: "1.78em",
    heading: "1.115em",
  },
  colors: {
    text: "#484041",
    background: "#ffffff",
    primary: "#ebc670",
    secondary: "#f0d494",
    accent: "#e9e4f1",
    highlight: "#faf1dc",
    muted: "#cccccc",
    modes: {
      dark: {
        text: "#e2e2e2",
        background: "#25272a",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontSize: [xs, md],
      fontWeight: "body",
      lineHeight: "body",
      transition: "color 0.2s ease-out, background 0.2s ease-out",
    },
    h1: {
      ...heading,
      fontSize: [xs+6, md+6]
    },
    h2: {
      ...heading,
      fontSize: [xs+5, md+5]
    },
    h3: {
      ...heading,
      fontSize: [xs+4, md+4]
    },
    h4: {
      ...heading,
      fontSize: [xs+3, md+3]
    },
    h5: {
      ...heading,
      fontSize: [xs+2, md+2]
    },
    h6: {
      ...heading,
      fontSize: [xs+1, md+1]
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      marginTop: 0,
      marginBottom: 5,
    },
    a: {
      color: "primary",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      ...prism,
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
}

module.exports = theme
