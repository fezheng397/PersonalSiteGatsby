import { graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import 'styles/core.scss';
import { lightMode } from 'vars/light-mode';
import { Homepage } from '../modules/homepage/components/homepage';

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

const SiteContainer = styled.div``;

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    const { name, tagline } = this.props.data.site.siteMetadata;
    console.log(this.props.data.site.siteMetadata);

    return (
      <ThemeProvider theme={lightMode}>
        <SiteContainer>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Felix Zheng</title>
            <link rel="canonical" href="http://felixzheng.com" />
          </Helmet>

          <Homepage />
        </SiteContainer>
      </ThemeProvider>
    );
  }
}
