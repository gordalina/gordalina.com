const prism = require('./theme.json')

const heading = {
  color: "text",
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
  letterSpacing: 1,
  marginBottom: 2
}

const list = {
  marginTop: 0,
  marginBottom: [4, 5],
};

const colors = {
  text: "#484041",
  background: "#ffffff",
  primary: "#ebc400",
  secondary: "#ffe252", // 20 stops lighter
  highlight: "#fff3b8", // 40 stops lighter
  accent: "#6e40c9", // purple
  muted: "#cccccc",

  "code-text": "#484041",
  "code-background": "#f6f8fa",
  "code-comments": "#999988",
  "code-punctuation": "#484041",
  "code-string": "#484041",
  "code-property": "#36acaa",
  "code-variable": "#36acaa",
  "code-keyword": "#d73a49",
  "code-function": "#6f42c1",
  "code-class-name": "#6f42c1",
  "code-selector": "#005cc5",

  modes: {
    dark: {
      text: "#e2e2e2",
      background: "#25272a",

      "code-text": "#9cdcfe",
      "code-background": "#1e1e1e",
      "code-comments": "#6a9955",
      "code-punctuation": "#808080",
      "code-string": "rgb(206, 145, 120)",
      "code-property": "rgb(181, 206, 168)",
      "code-variable": "rgb(181, 206, 168)",
      "code-keyword": "rgb(86, 156, 214)",
      "code-function": "#dcdcaa",
      "code-class-name": "rgb(78, 201, 176)",
      "code-selector": "rgb(156, 220, 254)",
    },
  },
};

const xs = 0;
const md = 7;

const theme = {
  useColorSchemeMediaQuery: false,

  space: [
    '0', '0.125rem', '0.25rem', '0.5rem', // 0-3: fractional
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
  colors,
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
      marginBottom: [4, 5]
    },
    a: {
      color: "primary",
      textDecorationColor: colors.secondary,
      '&:hover': {
        textDecoration: "none",
      }
    },
    inlineCode: {
      ...prism,
      fontFamily: "monospace",
      fontSize: [ '14px', 0],
      borderRadius: "0.25rem",
      padding: "0.5rem",
    },
    code: {
      ...prism,
      fontFamily: "monospace",
      fontSize: [ '14px', 0],
      borderRadius: "0.5rem",
      lineHeight: "1.5rem",
      padding: ["1.25rem", "1.75rem"],
      whiteSpace: "pre-wrap",
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
    ol: { ...list },
    ul: { ...list },
  },
}

module.exports = theme
