import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.footer`
  & {
    margin-top: var(--spacing);

    display: flex;
    align-items: center;
  }

  & > a {
    font-size: 1.75em;
    color: var(--color-muted);
    text-decoration: none;
  }
`

const Rule = styled.hr`
  /* border-color: var(--color-light); */
  flex-grow: 1;
  margin-left: 1em;

  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    var(--color-light),
    rgba(0, 0, 0, 0)
  );
`

const Footer: React.SFC = () => (
  <Container>
    <Link to="/">𝔊</Link>
    <Rule />
  </Container>
)

export default Footer
