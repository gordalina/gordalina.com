import { Link as GatsbyLink } from 'gatsby'
import theme from "src/gatsby-plugin-theme-ui"

export const Link = (props) => <GatsbyLink {...props} sx={theme.styles.a} />
