import { graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import '../styles/core.scss';
import { Homepage } from './homepage/components/homepage';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
      };
    };
  };
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`;

const SiteContainer = styled.div`
  margin: 0 auto;
  max-width: 1040px;
`;

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    const { name, tagline } = this.props.data.site.siteMetadata;
    console.log(this.props.data.site.siteMetadata);

    return (
      <SiteContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Felix Zheng</title>
          <link rel="canonical" href="http://felixzheng.com" />
        </Helmet>

        <Homepage />
      </SiteContainer>
    );
  }
}
