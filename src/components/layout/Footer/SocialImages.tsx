import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubAlt,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

import * as links from "src/utils/links"

const SocialImage = styled.a`
  margin-right: 0.75em;

  &:last-child {
    margin-right: 0;
  }
`

export const SocialImages: React.FC = () => (
  <div>
    <SocialImage sx={{ color: "muted" }} href={links.github} title="GitHub">
      <FontAwesomeIcon icon={faGithubAlt} />
    </SocialImage>

    <SocialImage sx={{ color: "muted" }} href={links.linkedin} title="Linkedin">
      <FontAwesomeIcon icon={faLinkedinIn} />
    </SocialImage>

    <SocialImage
      sx={{ color: "muted" }}
      href={links.instagram}
      title="Instagram"
    >
      <FontAwesomeIcon icon={faInstagram} />
    </SocialImage>
  </div>
)

export default SocialImages
