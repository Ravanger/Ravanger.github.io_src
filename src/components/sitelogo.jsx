import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const H1LogoTitle = styled.h1`
  font-size: 2.5em;
  font-weight: bold;
  line-height: 0.75;
  width: 6em;
`

const H2LogoSubtitle = styled.h2`
  font-size: 1em;
  font-weight: 100;
`

const SiteLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `)

  return (
    <div className="pure-u-1-2">
      <Link to="/">
        <H1LogoTitle>{data.site.siteMetadata.title}</H1LogoTitle>
        <H2LogoSubtitle>{data.site.siteMetadata.subtitle}</H2LogoSubtitle>
      </Link>
    </div>
  )
}

export default SiteLogo
