import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubAlt,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

import * as links from "src/utils/links"
import { device } from "src/utils/device"

const SocialImage = styled.a`
  color: var(--color-muted);
  margin-right: 0.75em;

  @media ${device.phone} {
    font-size: 1.5em;
  }
`

const SocialImages: React.SFC = () => (
  <>
    <SocialImage href={links.github} title="GitHub">
      <FontAwesomeIcon icon={faGithubAlt} />
    </SocialImage>

    <SocialImage href={links.linkedin} title="Linkedin">
      <FontAwesomeIcon icon={faLinkedinIn} />
    </SocialImage>

    <SocialImage href={links.instagram} title="Instagram">
      <FontAwesomeIcon icon={faInstagram} />
    </SocialImage>
  </>
)

export default SocialImages
