import React from "react"
import { Link } from "gatsby"

import { Styled } from "theme-ui"

import SocialImages from "src/components/home/SocialImages"
import Layout from "src/components/layout/Layout"
import SEO from "src/components/SEO"
import Header from "src/components/ui/Header"

const IndexPage: React.SFC = () => (
  <Layout>
    <SEO />

    <Header>
      <Styled.h1>Samuel Gordalina</Styled.h1>

      <Styled.p>
        Hi, my name is Samuel Gordalina. I live in San Francisco, California and
        am originally from sunny Portugal. Over the years I have developed a
        passion for technology and dedicated countless hours to the art of code.
      </Styled.p>

      <Styled.p>
        By trade I am a software engineer proficient in designing, architecting
        and building web, mobile, and infrastructure applications. I consult for
        companies ranging from small startups to large enterprises &mdash;
        sometimes as founder.
      </Styled.p>

      <Styled.p>
        My hobbies include contributing to{" "}
        <a href="https://github.com/gordalina">open source software</a>,
        dabbling in travel <Link to="/photography">photography</Link>,{" "}
        <Link to="/music">music production</Link>, and motorcycle riding.
        {/* ,and occasionally <a href="/articles">writing</a>. */}
      </Styled.p>

      <SocialImages />
    </Header>

    {/* <h2>Recent Articles</h2>

    <ul>
      <li>
        <a href="">Announcing Hush</a>
        <p>A runtime configuration provider for Elixir</p>
      </li>
    </ul> */}
  </Layout>
)

export default IndexPage
