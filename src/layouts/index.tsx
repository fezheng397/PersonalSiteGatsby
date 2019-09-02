import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

export interface ILayoutProps {
  children: any;
}

const SiteContainer = styled.div``;

export function Layout(props: ILayoutProps) {
  const { children } = props;
  return (
    <SiteContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Felix Zheng</title>
        <link rel="canonical" href="http://felixzheng.com" />
        <link rel="stylesheet" href="https://use.typekit.net/tfc0usc.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,400i,600,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {children}
    </SiteContainer>
  );
}
