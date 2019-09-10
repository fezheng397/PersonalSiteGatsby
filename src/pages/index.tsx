import { graphql } from "gatsby";
import { Layout } from "layouts";
import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import "styles/core.scss";
import { lightMode } from "vars/light-mode";
import { Homepage } from "../modules/homepage/components/homepage";

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

    return (
      <ThemeProvider theme={lightMode}>
        <Layout hideNav={true}>
          <Homepage />
        </Layout>
      </ThemeProvider>
    );
  }
}
