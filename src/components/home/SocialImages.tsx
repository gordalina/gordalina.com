/** @jsx jsx*/
import { jsx } from "theme-ui"
import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubAlt,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

import * as links from "src/utils/links"
import { device } from "src/utils/device"

const SocialImage = styled.a`
  margin-right: 0.75em;

  @media ${device.phone} {
    font-size: 1.5em;
  }
`

const SocialImages: React.SFC = () => (
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
