import React from "react"
import { Styled } from "theme-ui"
// import styled from "@emotion/styled"
// import copy from 'copy-to-clipboard';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faLink } from "@fortawesome/free-solid-svg-icons"
// import { slug } from 'github-slugger'

// const heading = (Component) => {
//   const Wrapper = styled(Component)`
//     a.anchor {
//       float: left;
//       margin-left: -1.25em;
//       padding-right: 1.25em;
//       font-size: 0.6em;
//       width: 0.85em;
//       cursor: pointer;
//       visibility: hidden;
//       color: var(--theme-ui-colors-primary);

//       &:hover {
//         visibility: visible;
//       }
//     }

//     &:hover a.anchor {
//       visibility: visible;
//     }
//   `

//   return ({ children, ...rest }) => {
//     const id = rest.id || slug(String(children).trim());
//     const href = `${window.location.href.split('#')[0]}#${id}`;

//     return (
//       <Wrapper id={id}>
//         {/* <a aria-hidden={true} className={"anchor"} href={href} onClick={() => copy(href)}>
//           <FontAwesomeIcon icon={faLink} />
//         </a> */}
//         {children}
//       </Wrapper>
//     );
//   }
// }


export const h1 = Styled.h1;
export const h2 = Styled.h2;
export const h3 = Styled.h3;
export const h4 = Styled.h4;
export const h5 = Styled.h5;
export const h6 = Styled.h6;
export const Headings = { h1, h2, h3, h4, h5, h6 };
